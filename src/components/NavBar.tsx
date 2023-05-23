import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

// for ReactQuery usage
// interface Props {
//   onSearch: (searchText: string) => void;
// }

const NavBar = () =>
  // for ReactQuery usage
  // {onSearch}:Props
  {
    return (
      <HStack padding="10px">
        <Image src={logo} boxSize="60px" />
        <SearchInput
        // for ReactQuery usage
        // onSearch={onSearch}
        />
        <ColorModeSwitch />
      </HStack>
    );
  };

export default NavBar;
