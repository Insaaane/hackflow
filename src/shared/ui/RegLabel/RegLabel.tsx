import { Icon, Text } from "@gravity-ui/uikit";
import type { SVGIconData } from "node_modules/@gravity-ui/uikit/build/esm/components/Icon/types";
import React from "react";

enum ColorTypes {
  primary = "primary",
  common = "common",
}

type TColorType = keyof typeof ColorTypes;

interface Props {
  icon: SVGIconData;
  title: string;
  colorType: TColorType;
  subtitle: React.ReactNode;
}

function RegLabel({ icon, subtitle, title, colorType }: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          minWidth: 44,
          padding: 12,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: `${
            colorType === ColorTypes.primary
              ? "rgba(255, 190, 92, 0.30)"
              : "rgba(0, 0, 0, 0.05)"
          }`,

          borderRadius: 10,
        }}
      >
        <Icon data={icon} size={20} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Text variant="body-1" color="secondary" whiteSpace="nowrap">
          {title}
        </Text>
        <Text variant="body-2" whiteSpace="nowrap">
          {subtitle}
        </Text>
      </div>
    </div>
  );
}

export default React.memo(RegLabel);
