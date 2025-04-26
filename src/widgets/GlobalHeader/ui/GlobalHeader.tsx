import { Bell, Comment, Cubes3 } from "@gravity-ui/icons";
import { Button, Icon, User } from "@gravity-ui/uikit";
import React from "react";
import Logo from "@/shared/ui/Icons/Logo.png";

function GlobalHeader() {
  return (
    <div
      style={{
        padding: "12px 16px",
        backgroundColor: "#FFF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <img src={Logo} alt="Лого" />
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button view="flat" size="xl" href={"/"}>
            <Icon data={Cubes3} size={18} />
            Мои события
          </Button>
          <Button view="flat" size="xl" href={"/"}>
            <Icon data={Comment} size={20} />
          </Button>
          <Button view="flat" size="xl" href={"/"}>
            <Icon data={Bell} size={20} />
          </Button>
        </div>

        <User
          avatar={{ text: "Павлов Михаил", theme: "brand" }}
          name="Павлов Михаил"
          description="pavlovmih@mail.ai"
          size="m"
        />
      </div>
    </div>
  );
}

export default React.memo(GlobalHeader);
