import type { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "@emotion/react";
import useTheme from "@/hooks/useTheme";

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const { themeObject, browserTheme, setbrowserTheme } = useTheme();

  return <ThemeProvider theme={themeObject}>{children}</ThemeProvider>;
};
export default AppProvider;
