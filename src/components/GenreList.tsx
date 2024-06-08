import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imgage-url";
import GenreListSkeleton from "./GenreListSkeleton";

function GenreList() {
  const { data, error, isLoading } = useData<Genre>("/genres");
  const skeletons = Array.from({ length: 20 }, (_, index) => index);

  if (error) return null;

  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                boxSize='32px'
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
