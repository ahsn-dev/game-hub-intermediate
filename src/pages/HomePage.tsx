import { Box, Grid, Show, GridItem, Flex } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      {/* <GridItem area={"nav"}> */}
      {/* <NavBar */}
      {/* // for ReactQuery usage */}
      {/* // onSearch={(searchText) => setGameQurey({ ...gameQurey, searchText })} */}
      {/* /> */}
      {/* </GridItem> */}
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
          // for ReactQuery usage
          // selectedGenreId={gameQurey.genreId}
          // onSelectedGenre={(genre) =>
          //   setGameQurey({ ...gameQurey, genreId: genre.id })
          // }
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading
          // for ReactQuery usage
          // gameQuery={gameQurey}
          />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
              // for ReactQuery usage
              // onSelectPlatform={(platform) =>
              //   setGameQurey({ ...gameQurey, platformId: platform.id })
              // }
              // selectedPlatformId={gameQurey.platformId}
              />
            </Box>
            <SortSelector
            // for ReactQuery usage
            // sortOrder={gameQurey.sortOrder}
            // onSelectSortOrder={(sortOrder) =>
            //   setGameQurey({ ...gameQurey, sortOrder })
            // }
            />
          </Flex>
        </Box>
        <GameGrid
        // for ReactQuery usage
        // gameQurey={gameQurey}
        />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
