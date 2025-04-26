import { CustomInput, CustomSelect, Warning } from "@/shared/ui";
import { CircleQuestion, TrashBin } from "@gravity-ui/icons";
import { Button, Icon, Switch, Text, User } from "@gravity-ui/uikit";
import React from "react";

const mockOptions = [
  { value: "val_1", content: "Тимлид" },
  { value: "val_2", content: "Backend" },
  { value: "val_3", content: "Value 3" },
  { value: "val_4", content: "Value 4" },
];

const mockOptions2 = [
  { value: "val_1", content: "Разработка сайта для проведения хакатонов" },
  { value: "val_3", content: "Value 3" },
  { value: "val_4", content: "Value 4" },
];

interface Props {
  participants: string[];
}

function TeamCard({ participants }: Props) {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#fff",
        borderRadius: 12,
        flexDirection: "column",
        padding: 24,
        gap: 24,
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Text variant="header-1">Команда</Text>

        <div style={{ display: "flex", gap: 16, alignItems: "end" }}>
          <CustomInput
            required
            label="Название команды"
            placeholder="Envelope"
          />

          <Button size="xl">
            <Icon data={TrashBin} size={20} />
            Удалить команду
          </Button>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Text variant="header-1">Участники</Text>
        <div
          style={{
            display: "flex",
            gap: 8,
            padding: "8px 16px",
            alignItems: "center",
            borderRadius: 8,
            backgroundColor: "rgba(255, 0, 61, 0.15)",
            maxWidth: 374,
            justifyContent: "center",
          }}
        >
          <Icon stroke="#E9033A" fill="#E9033A" size={20} data={Warning} />
          <Text variant="body-1">
            Добавьте еще {"2"} участника, чтобы продолжить.
          </Text>
        </div>

        <div>
          {participants.map((member) => (
            <div
              style={{
                padding: "12px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <User
                avatar={{ text: `${member}`, theme: "brand" }}
                name={`${member}`}
                description="pavlovmih@mail.ai"
                size="l"
              />

              <div style={{ display: "flex", gap: 12 }}>
                <CustomSelect
                  value={[mockOptions[0].value, mockOptions[1].value]}
                  size="l"
                  width={264}
                  options={mockOptions}
                  placeholder="Тимлид"
                  multiple
                />

                <Button size="l">
                  <Icon data={TrashBin} size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Icon data={CircleQuestion} />
          <Text variant="body-2">Поиск участников</Text>
          <Switch />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Text variant="header-1">Кейс</Text>
          <div style={{ width: 320 }}>
            <CustomSelect
              required
              value={[mockOptions[0].value]}
              options={mockOptions2}
              placeholder="Кейс 1"
              label="Выберите кейс"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(TeamCard);
