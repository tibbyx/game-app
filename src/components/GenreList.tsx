import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imgage-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

function GenreList({ onSelectGenre, selectedGenreId: selectedGenreId }: Props) {
  const { data, error, isLoading } = useGenres();
  const skeletons = Array.from({ length: 20 }, (_, index) => index);

  if (error) return null;

  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      <Heading fontSize='2xl' marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                boxSize='32px'
                borderRadius={8}
                objectFit='cover'
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace='normal'
                textAlign='left'
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize='lg'
                variant='link'
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
