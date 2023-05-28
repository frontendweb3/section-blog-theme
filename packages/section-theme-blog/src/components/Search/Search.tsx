import { ActionIcon } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { OramaSearch } from "../../plugins/Orama/index";
import { useState } from "react";

export function SearchBar() {
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);

  return (
    <>
      <OramaSearch
        model={{
          setSlowTransitionOpened: setSlowTransitionOpened,
          slowTransitionOpened: slowTransitionOpened,
        }}
        boost={{ title: 30, description: 15, content: 10 }}
        limitResults={10}
      />

      <ActionIcon
        aria-label="Search bar"
        size="lg"
        onClick={() => setSlowTransitionOpened(true)}
      >
        <IconSearch size={"1.2rem"} />
      </ActionIcon>
    </>
  );
}
