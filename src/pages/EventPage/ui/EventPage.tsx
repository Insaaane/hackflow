import { CustomInput } from "@/shared/ui";
import { EventFullInfo } from "@/widgets/EventFullInfo";
import { CrownDiamond, SquareCheck } from "@gravity-ui/icons";
import { Button, Icon, Label, Modal, Text } from "@gravity-ui/uikit";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import UploadIcon from "@/shared/ui/Icons/Upload.svg";

function EventPage() {
  const [isOpen, setIsOpen] = useState<boolean>();

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  return (
    <div
      style={{
        padding: "24px 16px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "space-between", gap: 24 }}
      >
        <EventFullInfo />

        <div>
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              padding: 16,
              width: 360,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Text variant="subheader-3">Павлов Михаил</Text>
                <Text variant="body-1" color="secondary">
                  pavlovmih@mail.ai
                </Text>
              </div>
              <Label
                theme="success"
                size="m"
                icon={<Icon data={SquareCheck} />}
              >
                В команде
              </Label>
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <Label icon={<Icon data={CrownDiamond} />} theme="warning">
                Тимлид
              </Label>

              <Label>Backend</Label>
            </div>

            <Button size="xl">Перейти в команду</Button>
          </div>

          <div
            style={{
              marginTop: 16,
              backgroundColor: "#fff",
              borderRadius: 12,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              padding: 16,
              width: 360,
            }}
          >
            <Text variant="subheader-3">Ваше решение</Text>

            <Text variant="body-2">Отправьте решение до 10:00, 01.05.2025</Text>

            <Button view="action" size="xl" onClick={() => setIsOpen(true)}>
              Отправить решение
            </Button>
          </div>
        </div>
      </div>

      <Modal
        contentClassName="modal"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div
          style={{
            padding: 24,
            width: 580,
            backgroundColor: "#fff",
            borderRadius: 16,
            display: "flex",
            gap: 24,
            flexDirection: "column",
            boxShadow: "0px 2px 52px 0px rgba(0, 0, 0, 0.14)",
          }}
        >
          <Text variant="header-1">Отправить решение</Text>

          <section className="container">
            <div
              style={{
                border: "1px solid var(--Neutral-5, #D9D9D9)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 142,
                padding: 16,
                borderRadius: 16,
              }}
              {...getRootProps({ className: "dropzone" })}
            >
              <input {...getInputProps()} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                <img src={UploadIcon} width={42} alt="" />
                <Text variant="body-2">
                  Нажмите на поле или перетащите файл
                </Text>
                <Text variant="body-1" color="secondary">
                  Принимаются только файлы в формате .pptx
                </Text>
              </div>
            </div>
          </section>

          <CustomInput label="Ссылка на GitHub" placeholder="link" required />

          <CustomInput label="Ссылка на Figma" placeholder="link" required />

          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
            <Button view="raised" size="l" onClick={() => setIsOpen(false)}>
              Отмена
            </Button>

            <Button view="action" size="l" onClick={() => setIsOpen(false)}>
              Готово
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default React.memo(EventPage);
