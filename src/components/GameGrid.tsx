import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

// for ReactQuery usage
// interface Props {
//   gameQurey: GameQuery;
// }

const GameGrid = () =>
  // for ReactQuery usage
  // { gameQurey }: Props
  {
    const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
    // for ReactQuery usage
    // gameQurey
    const skeletons = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28,
    ];

    if (error) return <Text>{error.message}</Text>;

    const fetchedGamesTotals =
      data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
    return (
      <Box padding="10px">
        <InfiniteScroll
          dataLength={fetchedGamesTotals}
          hasMore={!!hasNextPage}
          next={() => fetchNextPage()}
          loader={<Spinner />}
        >
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
            {isLoading &&
              skeletons.map((skeleton) => (
                <GameCardContainer key={skeleton}>
                  <GameCardSkeleton />
                </GameCardContainer>
              ))}
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                ))}
              </React.Fragment>
            ))}
          </SimpleGrid>
        </InfiniteScroll>

        {/* button for load more */}
        {/* {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )} */}
      </Box>
    );
  };

export default GameGrid;
