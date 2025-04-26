import { Button, SegmentedRadioGroup } from "@gravity-ui/uikit";
import React from "react";

const options = [
  { value: "my-team", content: "Моя команда" },
  { value: "all-teams", content: "Все команды" },
];

interface Props {
  onCreateBtnClick: () => void;
}

function TeamsHeader({ onCreateBtnClick }: Props) {
  return (
    <div
      style={{
        display: "flex",
        padding: 24,
        borderRadius: 12,
        backgroundColor: "#fff",
        justifyContent: "space-between",
        width: 1116,
      }}
    >
      <SegmentedRadioGroup size="xl" defaultValue={options[0].value}>
        <SegmentedRadioGroup.Option
          content={options[0].content}
          value={options[0].value}
        />
        <SegmentedRadioGroup.Option
          content={options[1].content}
          value={options[1].value}
        />
      </SegmentedRadioGroup>

      {/* <Button view="raised" size="xl">
        Покинуть команду
      </Button> */}

      <Button view="action" size="xl" onClick={onCreateBtnClick}>
        Создать команду
      </Button>
    </div>
  );
}

export default React.memo(TeamsHeader);
