import { CustomInput, CustomSelect, EventListCard } from "@/shared/ui";
import { Footer } from "@/widgets/Footer";
import { Text } from "@gravity-ui/uikit";
import React from "react";

const mockOptions = [
  { value: "val_1", content: "Аналитик" },
  { value: "val_2", content: "Frontend" },
  { value: "val_3", content: "Backend" },
  { value: "val_4", content: "Дизайнер" },
];

interface Props {
  prize: number | null;
  title: string;
  img: string;
  address: string;
  endRedDate: Date;
  onNextBtnClick: () => void;
}

function Registration(props: Props) {
  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: 12,
          padding: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 28,
          width: "100%",
          maxWidth: 1116,
        }}
      >
        <Text variant="header-1">Регистрация</Text>

        <EventListCard {...props} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            width: "100%",
          }}
        >
          <div style={{ display: "flex", gap: 16, width: "100%" }}>
            <CustomInput
              value="Павлов"
              required
              label="Фамилия"
              placeholder="Цаль"
            />
            <CustomInput
              value="Михаил"
              required
              label="Имя"
              placeholder="Эрик"
            />
            <CustomSelect
              required
              label="Специализация"
              placeholder="Аналитик, Frontend"
              options={mockOptions}
              multiple
            />
          </div>

          <div style={{ display: "flex", gap: 16, width: "100%" }}>
            <CustomInput
              value="pavlovmih@mail.ai"
              type="email"
              required
              label="Электронная почта"
              placeholder="example@yandex.ru"
            />
            <CustomInput
              type="tel"
              required
              label="Телефон"
              placeholder="+7 --- --- -- --"
            />
            <CustomInput required label="Telegram" placeholder="@nickname" />
          </div>

          <div style={{ display: "flex", gap: 16, width: "100%" }}>
            <CustomInput label="Место учебы" placeholder="УрФУ" />
            <CustomInput
              label="Направление обучения"
              placeholder="Программная инженерия"
            />
            <CustomInput type="number" label="Курс" placeholder="3" />
          </div>
        </div>
      </div>

      <Footer btnText="Продолжить" onBtnClick={props.onNextBtnClick} />
    </>
  );
}

export default React.memo(Registration);
