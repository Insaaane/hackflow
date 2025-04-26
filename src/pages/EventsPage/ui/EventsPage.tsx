import { EventCard } from "@/widgets/EventCard";
import { EventFullInfo } from "@/widgets/EventFullInfo";
import { Filters } from "@/widgets/Filters";
import image from "@/shared/ui/Icons/MockImage.png";

function EventsPage() {
  return (
    <>
      <Filters />

      <div
        style={{
          display: "flex",
          padding: "24px 16px",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", gap: 24, width: 1116 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <EventCard
              address="г. Екатеринбург, ул. Бориса Ельцина, 3"
              dayBeforeStart={3}
              img={image}
              numberParticipants={5}
              prize={100000}
              tags={[
                "Хакатон",
                "Веб-разработка",
                "Очень длиный тег",
                "Еще тег",
              ]}
              title="ИТЫ Герой 2025"
            />
          </div>

          <EventFullInfo />
        </div>
      </div>
    </>
  );
}

export default EventsPage;
