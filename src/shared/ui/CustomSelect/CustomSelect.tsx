import { Text, Select } from "@gravity-ui/uikit";
import type { InputControlSize, SelectOption } from "@gravity-ui/uikit";
import React from "react";

interface Props {
  placeholder?: string;
  label?: string;
  required?: boolean;
  multiple?: boolean;
  options: SelectOption[];
  width?: number;
  value?: string[];
  size?: InputControlSize;
}
function CustomSelect({
  placeholder,
  label,
  required,
  multiple,
  options,
  width,
  size = "xl",
  value,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        flexDirection: "column",
        width: "100%",
        minWidth: width,
      }}
    >
      {label && (
        <Text variant="body-2">
          {label}
          {required && <span style={{ color: "#E9033A" }}>*</span>}
        </Text>
      )}
      <Select
        value={value}
        multiple={multiple}
        options={options}
        size={size}
        placeholder={placeholder}
      />
    </div>
  );
}

export default React.memo(CustomSelect);
