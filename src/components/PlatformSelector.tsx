import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

// for ReactQuery usage
// interface Props {
//   onSelectPlatform: (platform: Platform) => void;
//   selectedPlatformId?: number;
// }

const PlatformSelector = () =>
  // for ReactQuery usage
  // { onSelectPlatform, selectedPlatformId }: Props
  {
    const { data, error } = usePlatforms();
    const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
    const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
    const selectedPlatform = usePlatform(selectedPlatformId);

    if (error) return null;
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platform"}
        </MenuButton>
        <MenuList>
          {data?.results.map((platform) => (
            <MenuItem
              onClick={
                () => setSelectedPlatformId(platform.id)

                // for ReactQuery usage
                // () => onSelectPlatform(platform)
              }
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  };

export default PlatformSelector;
