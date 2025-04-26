import { CustomInput, CustomSelect } from "@/shared/ui";
import { Button, Modal, Text } from "@gravity-ui/uikit";
import React from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
  onSubmit: () => void;
}

const mockOptions = [
  { value: "val_1", content: "Разработка дашборда 1С" },
  { value: "val_2", content: "Разработка сайта для проведения хакатонов" },
  { value: "val_3", content: "Интеграция с сервисом Яндекс.Карты" },
];

function CreateTeamModal({ isOpen, setIsOpen, onSubmit }: Props) {
  return (
    <Modal contentClassName="modal" open={isOpen} onClose={setIsOpen}>
      <div
        style={{
          padding: 24,
          width: 464,
          backgroundColor: "#fff",
          borderRadius: 16,
          display: "flex",
          gap: 24,
          flexDirection: "column",
          boxShadow: "0px 2px 52px 0px rgba(0, 0, 0, 0.14)",
        }}
      >
        <Text variant="header-1">Создать команду</Text>

        <CustomInput label="Название команды" placeholder="Envelope" required />

        <CustomSelect
          required
          options={mockOptions}
          placeholder="Кейс 1"
          label="Выберите кейс"
        />

        <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
          <Button view="raised" size="l" onClick={setIsOpen}>
            Отмена
          </Button>

          <Button view="action" size="l" onClick={onSubmit}>
            Готово
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default React.memo(CreateTeamModal);
