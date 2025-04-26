import React from "react";
import RegLabel from "../RegLabel/RegLabel";
import TrophyIconReg from "../Icons/TrophyIconReg";
import { Calendar, LocationArrow } from "@gravity-ui/icons";
import { Icon, Text } from "@gravity-ui/uikit";
import dayjs from "dayjs";

interface Props {
  prize: number | null;
  title: string;
  img: string;
  address: string;
  endRedDate: Date;
}

function EventListCard({ prize, address, endRedDate, img, title }: Props) {
  const formattedDate = dayjs(endRedDate).format("DD.MM.YYYY");

  return (
    <div
      style={{
        display: "flex",
        justifyItems: "flex-end",
        width: "100%",
        padding: 16,
        gap: 32,
        borderRadius: 12,
        boxShadow:
          "0px 1px 6px 0px rgba(0, 0, 0, 0.05), 1px 3px 13px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 12,
          width: "100%",
        }}
      >
        <div style={{ width: 44, height: 44 }}>
          <img src={img} alt="Event logo" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            width: "100%",
          }}
        >
          <Text variant="subheader-3">{title}</Text>
          <div style={{ display: "flex", gap: 5 }}>
            <Icon data={LocationArrow} size={11} />
            <Text variant="body-1">{address}</Text>
          </div>
        </div>
      </div>

      {prize && (
        <RegLabel
          colorType="primary"
          title="Призовой фонд"
          subtitle={`${prize} ₽`}
          icon={TrophyIconReg}
        />
      )}

      <RegLabel
        colorType="common"
        title="Конец регистрации"
        subtitle={formattedDate}
        icon={Calendar}
      />
    </div>
  );
}

export default React.memo(EventListCard);
