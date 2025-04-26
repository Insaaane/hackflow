import { Registration } from "@/features/Registration";
import { useNavigate, useParams } from "react-router-dom";
import image from "@/shared/ui/Icons/MockImage.png";

function ParticipatePage() {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "24px 16px",
      }}
    >
      <Registration
        address="г. Екатеринбург, ул. Бориса Ельцина, 3"
        endRedDate={new Date("2025-04-28")}
        img={image}
        title="ИТЫ Герой 2025"
        prize={100000}
        onNextBtnClick={() => navigate(`/events/${eventId}/team`)}
      />
    </div>
  );
}

export default ParticipatePage;
