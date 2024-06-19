import { Heading } from "@chakra-ui/layout";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);

  const heading = `${platform?.name || ""}  ${genre?.name || ""}  Games`;

  return (
    <Heading as={"h1"} marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  );
};
