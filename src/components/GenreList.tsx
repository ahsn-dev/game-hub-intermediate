import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";

// for ReactQuery usage
// interface Props {
//   onSelectedGenre: (genre: Genre) => void;
//   selectedGenreId?: number;
// }

const GenreList = () =>
  // for ReactQuery usage
  // { selectedGenreId, onSelectedGenre }: Props
  {
    const { data, isLoading, error } = useGenres();
    const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

    // these two are use for dynamic shipping data but now we dont need these because we use static shipping data.
    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
      <>
        <Heading fontSize="2xl" marginBottom={3}>
          Genres
        </Heading>
        <List>
          {data?.results.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  src={genre.image_background}
                  boxSize="32px"
                  objectFit="cover"
                  borderRadius={8}
                />
                <Button
                  // for ReactQuery usage
                  // onClick={() => onSelectedGenre(genre)}

                  onClick={() => setSelectedGenreId(genre.id)}
                  fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                  whiteSpace="normal"
                  textAlign="left"
                  variant="link"
                  fontSize="lg"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      </>
    );
  };

export default GenreList;
