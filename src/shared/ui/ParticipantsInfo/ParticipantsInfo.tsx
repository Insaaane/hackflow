import React from "react";
import RegLabel from "../RegLabel/RegLabel";
import { Calendar, Persons } from "@gravity-ui/icons";
import dayjs from "dayjs";

interface Props {
  numberParticipants: number;
  teamSizeMin: number;
  teamSizeMax: number;
  dateStart: Date;
  dateEnd: Date;
}

function ParticipantsInfo({
  numberParticipants,
  teamSizeMax,
  teamSizeMin,
  dateEnd,
  dateStart,
}: Props) {
  const formattedStartDate = dayjs(dateStart).format("DD.MM.YYYY");
  const formattedEndDate = dayjs(dateEnd).format("DD.MM.YYYY");

  return (
    <div
      style={{
        display: "flex",
        padding: 24,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderRadius: 12,
      }}
    >
      <RegLabel
        colorType="common"
        icon={Persons}
        title="Участников"
        subtitle={String(numberParticipants)}
      />
      <RegLabel
        colorType="common"
        icon={Persons}
        title="Размер команды"
        subtitle={`${teamSizeMin} - ${teamSizeMax} участников`}
      />
      <RegLabel
        colorType="common"
        icon={Calendar}
        title="Дата проведения"
        subtitle={`${formattedStartDate} - ${formattedEndDate}`}
      />
    </div>
  );
}

export default React.memo(ParticipantsInfo);
