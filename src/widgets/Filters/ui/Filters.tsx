import { CustomSelect } from "@/shared/ui";
import { Sliders } from "@gravity-ui/icons";
import { Button, Icon } from "@gravity-ui/uikit";
import React from "react";

function Filters() {
  return (
    <div
      style={{
        padding: "12px 16px",
        display: "flex",
        gap: 12,
        backgroundColor: "#fff",
      }}
    >
      <div className="colored-select" style={{ maxWidth: 200 }}>
        <CustomSelect
          size="l"
          placeholder="Хакатоны"
          options={[{ value: "1", content: "option" }]}
        />
      </div>

      <div style={{ maxWidth: 200 }}>
        <CustomSelect
          size="l"
          placeholder="Сортировать по"
          options={[{ value: "1", content: "option" }]}
        />
      </div>

      <Button view="outlined" size="l">
        <Icon data={Sliders} size={16} />
        Фильтры
      </Button>
    </div>
  );
}

export default React.memo(Filters);
