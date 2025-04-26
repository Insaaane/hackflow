import { EmptySearch } from "@/shared/ui";
import { Plus, TrashBin } from "@gravity-ui/icons";
import { Button, Icon, Label, Text, UserLabel } from "@gravity-ui/uikit";
import React from "react";

interface ITeamRequest {
  name: string;
  roles: string[];
}

interface Props {
  requestsList: ITeamRequest[];
}

function ActiveRequests({ requestsList }: Props) {
  return (
    <div
      style={{
        display: "flex",
        borderRadius: 12,
        backgroundColor: "#fff",
        width: 500,
        padding: "24px 0",
        gap: 8,
        flexDirection: "column",
      }}
    >
      <Text variant="header-1" style={{ padding: "0 24px" }}>
        Активные заявки
      </Text>

      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {requestsList.map((request) => (
          <div
            style={{
              display: "flex",
              padding: "16px 24px",
              gap: 16,
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ width: "100%", minWidth: 178 }}>
              <UserLabel type="person" text={request.name} />
            </div>

            <div style={{ display: "flex", gap: 8, minWidth: 178 }}>
              {request.roles.map((role) => (
                <Label size="xs">{role}</Label>
              ))}
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <Button size="m" view="flat-danger">
                <Icon data={TrashBin} />
              </Button>

              <Button size="m" view="action">
                <Icon data={Plus} />
              </Button>
            </div>
          </div>
        ))}

        {!requestsList.length && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 15
            }}
          >
            <img src={EmptySearch} alt="Список пуст" width={200} />
            <Text variant="body-2">Заявок пока нет</Text>
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(ActiveRequests);
