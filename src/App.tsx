// import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
// import NavBar from "./components/NavBar";
// import GameGrid from "./components/GameGrid";
// import GenreList from "./components/GenreList";
// import PlatformSelector from "./components/PlatformSelector";
// import SortSelector from "./components/SortSelector";
// import GameHeading from "./components/GameHeading";

// // for ReactQuery usage
// // export interface GameQuery {
// //   genreId?: number;
// //   platformId?: number;
// //   sortOrder: string;
// //   searchText: string;
// // }

// const App = () => {
//   // for ReactQuery usage
//   // const [gameQurey, setGameQurey] = useState<GameQuery>({} as GameQuery);

//   return (
//     <Grid
//       templateAreas={{
//         base: `"nav"
//                "main"`,
//         lg: `"nav   nav"
//              "aside main"`,
//       }}
//       templateColumns={{
//         base: "1fr",
//         lg: "200px 1fr",
//       }}
//     >
//       <GridItem area={"nav"}>
//         <NavBar
//         // for ReactQuery usage
//         // onSearch={(searchText) => setGameQurey({ ...gameQurey, searchText })}
//         />
//       </GridItem>
//       <Show above="lg">
//         <GridItem area={"aside"} paddingX={5}>
//           <GenreList
//           // for ReactQuery usage
//           // selectedGenreId={gameQurey.genreId}
//           // onSelectedGenre={(genre) =>
//           //   setGameQurey({ ...gameQurey, genreId: genre.id })
//           // }
//           />
//         </GridItem>
//       </Show>
//       <GridItem area={"main"}>
//         <Box paddingLeft={2}>
//           <GameHeading
//           // for ReactQuery usage
//           // gameQuery={gameQurey}
//           />
//           <Flex marginBottom={5}>
//             <Box marginRight={5}>
//               <PlatformSelector
//               // for ReactQuery usage
//               // onSelectPlatform={(platform) =>
//               //   setGameQurey({ ...gameQurey, platformId: platform.id })
//               // }
//               // selectedPlatformId={gameQurey.platformId}
//               />
//             </Box>
//             <SortSelector
//             // for ReactQuery usage
//             // sortOrder={gameQurey.sortOrder}
//             // onSelectSortOrder={(sortOrder) =>
//             //   setGameQurey({ ...gameQurey, sortOrder })
//             // }
//             />
//           </Flex>
//         </Box>
//         <GameGrid
//         // for ReactQuery usage
//         // gameQurey={gameQurey}
//         />
//       </GridItem>
//     </Grid>
//   );
// };

// export default App;
