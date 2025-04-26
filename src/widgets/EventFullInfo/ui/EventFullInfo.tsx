import { ParticipantsInfo, RegLabel } from "@/shared/ui";
import { BigEventCard } from "@/widgets/BigEventCard";
import { Clock, LogoTelegram, Person } from "@gravity-ui/icons";
import { Icon, Text } from "@gravity-ui/uikit";
import React from "react";
import { useNavigate } from "react-router-dom";
import Partner from "@/shared/ui/Icons/Partner.png";

function EventFullInfo() {
  const navigate = useNavigate();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 12, width: 732 }}
    >
      <BigEventCard
        width={732}
        address="г. Екатеринбург, ул. Бориса Ельцина, 3"
        dayBeforeStart={3}
        description="Джем – это мероприятие, похожее на хакатон, где студенты командами пытаются создать MVP за пару дней по определённому кейсу, который раскрывается перед началом джема. Название «ИТ джем» имеет музыкальные корни. Джем-сешн – это импровизация ради получения удовольствия и создания чего-то нового в непринуждённой обстановке."
        numberParticipants={5}
        prize={100000}
        title="ИТЫ Герой 2025"
        onBtnClick={() => navigate(`./${133}/participate`)}
      />
      <ParticipantsInfo
        numberParticipants={5}
        teamSizeMin={3}
        teamSizeMax={4}
        dateStart={new Date("2025-04-29")}
        dateEnd={new Date("2025-05-1")}
      />

      <div
        style={{
          display: "flex",
          padding: 24,
          gap: 24,
          flexDirection: "column",
          backgroundColor: "#fff",
          borderRadius: 12,
        }}
      >
        <Text variant="header-1">Таймлайн</Text>

        <div style={{ display: "flex", gap: 12 }}>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.15)",
                width: 62,
                height: 28,
                borderRadius: "8px 8px 0 0",
              }}
            >
              <Text variant="body-1">1</Text>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                width: 62,
                height: 28,
                borderRadius: " 0 0 8px 8px",
              }}
            >
              <Text variant="body-1">Апр 29</Text>
            </div>
          </div>

          <div
            style={{
              padding: 20,
              display: "flex",
              width: "100%",
              gap: 20,
              flexDirection: "column",
              border: "1px solid rgba(0, 0, 0, 0.15)",
              borderRadius: 12,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text variant="subheader-3">Знакомство</Text>
              <Text color="secondary" variant="body-2">
                Установочная встреча, знакомство с организаторами
              </Text>
            </div>

            <RegLabel
              colorType="common"
              icon={Clock}
              subtitle="19:00 – 20:00"
              title="Время проведения"
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.15)",
                width: 62,
                height: 28,
                borderRadius: "8px 8px 0 0",
              }}
            >
              <Text variant="body-1">2</Text>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                width: 62,
                height: 28,
                borderRadius: " 0 0 8px 8px",
              }}
            >
              <Text variant="body-1">Апр 30</Text>
            </div>
          </div>

          <div
            style={{
              padding: 20,
              display: "flex",
              width: "100%",
              gap: 20,
              flexDirection: "column",
              border: "1px solid rgba(0, 0, 0, 0.15)",
              borderRadius: 12,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text variant="subheader-3">Открытие и разработка</Text>
              <Text color="secondary" variant="body-2">
                Официальное открытие мероприятия и разработка в самом разгаре
              </Text>
            </div>

            <RegLabel
              colorType="common"
              icon={Clock}
              subtitle="11:00 – 00:00"
              title="Время проведения"
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.15)",
                width: 62,
                height: 28,
                borderRadius: "8px 8px 0 0",
              }}
            >
              <Text variant="body-1">3</Text>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                width: 62,
                height: 28,
                borderRadius: " 0 0 8px 8px",
              }}
            >
              <Text variant="body-1">Май 1</Text>
            </div>
          </div>

          <div
            style={{
              padding: 20,
              display: "flex",
              width: "100%",
              gap: 20,
              flexDirection: "column",
              border: "1px solid rgba(0, 0, 0, 0.15)",
              borderRadius: 12,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text variant="subheader-3">Подведение итогов</Text>
              <Text color="secondary" variant="body-2">
                Окончание работ, подведение итогов и награждение
              </Text>
            </div>

            <RegLabel
              colorType="common"
              icon={Clock}
              subtitle="11:00 – 18:00"
              title="Время проведения"
            />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          padding: 24,
          gap: 24,
          flexDirection: "column",
          backgroundColor: "#fff",
          borderRadius: 12,
        }}
      >
        <Text variant="header-1">Кейсы</Text>

        <div style={{ display: "flex", gap: 12 }}>
          <div
            style={{
              padding: 20,
              display: "flex",
              width: "100%",
              gap: 20,
              flexDirection: "column",
              border: "1px solid rgba(0, 0, 0, 0.15)",
              borderRadius: 12,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text variant="subheader-3">Разработка дашборда 1С</Text>
              <Text color="secondary" variant="body-2">
                Разработка интерактивного дашборда
              </Text>
            </div>

            <Text variant="display-3">50 000 ₽</Text>
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <div
            style={{
              padding: 20,
              display: "flex",
              width: "100%",
              gap: 20,
              flexDirection: "column",
              border: "1px solid rgba(0, 0, 0, 0.15)",
              borderRadius: 12,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text variant="subheader-3">
                Разработка сайта для проведения хакатонов
              </Text>
              <Text color="secondary" variant="body-2">
                Разработка платформы для удобного проведения хакатонов
              </Text>
            </div>

            <Text variant="display-3">50 000 ₽</Text>
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <div
            style={{
              padding: 20,
              display: "flex",
              width: "100%",
              gap: 20,
              flexDirection: "column",
              border: "1px solid rgba(0, 0, 0, 0.15)",
              borderRadius: 12,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text variant="subheader-3">Интеграция с сервисом Яндекс.Карты</Text>
              <Text color="secondary" variant="body-2">
                Внедрение сервиса Яндекс.Карты в существующие продукты
              </Text>
            </div>

            <Text variant="display-3">50 000 ₽</Text>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          borderRadius: 12,
          padding: 20,
          gap: 24,
        }}
      >
        <Text variant="header-1">Контакты организаторов</Text>

        <RegLabel
          colorType="common"
          icon={Person}
          title="Анна Быстрова"
          subtitle={
            <div style={{ display: "flex", gap: 8, color: "#348BDC" }}>
              <Icon data={LogoTelegram} />
              @brbrbrle1
            </div>
          }
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          borderRadius: 12,
          padding: 20,
          gap: 24,
        }}
      >
        <Text variant="header-1">Партнёры</Text>

        <div style={{ display: "flex", gap: 16, alignSelf: "stretch" }}>
          <div
            style={{
              display: "flex",
              padding: 10,
              flexDirection: "column",
              gap: 6,
              border: "1px solid rgba(0, 0, 0, 0.15)",
              borderRadius: 12,
            }}
          >
            <img src={Partner} alt="" width={38} />

            <Text variant="subheader-1">1С ПРАЙМ РЕГИОН</Text>
            <Text variant="caption-1" color="secondary">
              1С-Дистрибьютор «Прайм Регион»
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(EventFullInfo);
