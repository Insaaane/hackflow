import { CustomInput } from "@/shared/ui";
import { Button, Text } from "@gravity-ui/uikit";
import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          width: 1116,
          display: "flex",
          padding: 24,
          borderRadius: 12,
          backgroundColor: "#fff",
          flexDirection: "column",
          gap: 28,
        }}
      >
        <Text variant="header-1">Регистрация</Text>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", gap: 16 }}>
            <CustomInput label="Имя" placeholder="Иван" />
            <CustomInput label="Фамилия" placeholder="Иванов" />
          </div>

          <div style={{ display: "flex", gap: 16 }}>
            <CustomInput
              required
              label="Электронная почта"
              placeholder="example@yandex.ru"
            />
            <CustomInput
              type="password"
              required
              label="Пароль"
              placeholder="********"
            />
          </div>
        </div>

        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <Button view="action" size="xl" onClick={() => navigate("/events")}>
            Продолжить
          </Button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(LoginPage);
