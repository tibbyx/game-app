import { List, ListItem, Skeleton } from "@chakra-ui/react";

function GenreListSkeleton() {
  return (
    <List>
      <ListItem paddingY='5px'>
        <Skeleton height='32px' paddingY={3} borderRadius={8} />
      </ListItem>
    </List>
  );
}

export default GenreListSkeleton;
