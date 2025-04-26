import { TrophyIcon } from "@/shared/ui";
import { Clock, LocationArrow, Persons } from "@gravity-ui/icons";
import { Button, Icon, Label, Text } from "@gravity-ui/uikit";
import React from "react";
import image from "@/shared/ui/Icons/MockImage.png";
import { useParams } from "react-router-dom";

interface Props {
  prize: number | null;
  numberParticipants: number;
  dayBeforeStart: number;
  title: string;
  address: string;
  description: string;
  width?: number;
  onBtnClick: () => void;
}

function BigEventCard({
  prize,
  numberParticipants,
  dayBeforeStart,
  address,
  title,
  description,
  width,
  onBtnClick,
}: Props) {
  const { eventId } = useParams<{ eventId: string }>();

  return (
    <div
      style={{
        width: width,
        padding: 24,
        borderRadius: 12,
        backgroundColor: "#fff",
        display: "flex",
        gap: 24,
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", gap: 16 }}>
        <div>
          <img src={image} alt="Event logo" />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Text variant="header-2">{title}</Text>

          <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
            <Icon data={LocationArrow} size={12} />
            <Text variant="body-1">{address}</Text>
          </div>
        </div>
      </div>

      <Text variant="body-2">{description}</Text>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
          {prize && (
            <div>
              <Label
                size="xs"
                theme="warning"
                icon={<Icon data={TrophyIcon} />}
              >
                {prize} ₽
              </Label>
            </div>
          )}
          <Label
            size="xs"
            theme="clear"
            icon={<Icon data={Persons} />}
            className="no-border-label"
          >
            {numberParticipants} участников
          </Label>
          <Label
            size="xs"
            theme="clear"
            icon={<Icon data={Clock} />}
            className="no-border-label"
          >
            {dayBeforeStart} дней до старта
          </Label>
        </div>

        {!eventId && (
          <Button view="action" size="xl" onClick={onBtnClick}>
            Принять участие
          </Button>
        )}
      </div>
    </div>
  );
}

export default React.memo(BigEventCard);
