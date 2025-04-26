import { CreateTeamModal } from "@/features/CreateTeamModal";
import { EmptyTeam } from "@/shared/ui";
import { ActiveRequests } from "@/widgets/ActiveRequests";
import { Footer } from "@/widgets/Footer";
import { TeamCard } from "@/widgets/TeamCard";
import { TeamsHeader } from "@/widgets/TeamsHeader";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function TeamPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { eventId } = useParams<{ eventId: string }>();

  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "24px 16px",
          alignItems: "center",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <TeamsHeader onCreateBtnClick={() => setIsModalOpen(true)} />

        {isEmpty && <EmptyTeam />}

        {!isEmpty && (
          <div style={{ width: 1116, display: "flex", gap: 24 }}>
            <TeamCard participants={["Павлов Михаил"]} />

            <ActiveRequests requestsList={[]} />
          </div>
        )}
      </div>

      <Footer
        btnText="Продолжить"
        onBtnClick={() => navigate(`/events/${eventId}`)}
      />

      <CreateTeamModal
        isOpen={isModalOpen}
        setIsOpen={() => setIsModalOpen(false)}
        onSubmit={() => {
          setIsEmpty(false);
          setIsModalOpen(false);
        }}
      />
    </>
  );
}

export default TeamPage;
