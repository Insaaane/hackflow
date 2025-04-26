import { Button } from "@gravity-ui/uikit";
import React from "react";

interface Props {
  onBtnClick: () => void;
  btnText: string;
}

function Footer({ btnText, onBtnClick }: Props) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        display: "flex",
        padding: "24px",
        borderRadius: "16px 16px 0 0",
        backgroundColor: "#fff",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: 1116,
          justifyContent: "flex-end",
        }}
      >
        <Button size="xl" view="action" onClick={onBtnClick}>
          {btnText}
        </Button>
      </div>
    </div>
  );
}

export default React.memo(Footer);
