import { ThemeProvider } from "@gravity-ui/uikit";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Providers({ children }: Props) {
  return <ThemeProvider theme="light">{children}</ThemeProvider>;
}
