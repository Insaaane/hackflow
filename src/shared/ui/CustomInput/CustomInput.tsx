import { TextInput, Text } from "@gravity-ui/uikit";
import React from "react";

type TInputType =
  | "number"
  | "search"
  | "text"
  | "email"
  | "password"
  | "tel"
  | "url"
  | undefined;

interface Props {
  placeholder?: string;
  label?: string;
  required?: boolean;
  type?: TInputType;
  name?: string;
  value?: string;
}
function CustomInput({
  placeholder,
  label,
  required,
  type,
  name,
  value,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        flexDirection: "column",
        width: "100%",
      }}
    >
      {label && (
        <Text variant="body-2">
          {label}
          {required && <span style={{ color: "#E9033A" }}>*</span>}
        </Text>
      )}
      <TextInput
        name={name}
        value={value}
        type={type}
        size="xl"
        placeholder={placeholder}
      />
    </div>
  );
}

export default React.memo(CustomInput);
