import { useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

// for ReactQuery usage
// interface Props {
//   onSearch: (searchText: string) => void;
// }

const SearchInput = () =>
  // for ReactQuery usage
  // { onSearch }: Props
  {
    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore((s) => s.setSearchText);
    const navigate = useNavigate();
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // for ReactQuery usage
          // if (ref.current) onSearch(ref.current.value);

          if (ref.current) {
            setSearchText(ref.current.value);
            navigate("/");
          }
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            ref={ref}
            borderRadius={20}
            placeholder="Search games..."
            variant="filled"
          />
        </InputGroup>
      </form>
    );
  };

export default SearchInput;
