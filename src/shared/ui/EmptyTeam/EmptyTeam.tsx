import { Text } from "@gravity-ui/uikit";
import { EmptySearch } from "..";

function EmptyTeam() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <img src={EmptySearch} width={400} />

      <Text variant="display-1">У Вас пока нет команды...</Text>

      <Text variant="body-2">Найдите или создайте свою команду.</Text>
    </div>
  );
}

export default EmptyTeam;
