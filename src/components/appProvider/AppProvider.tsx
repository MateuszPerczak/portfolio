import GlobalStyle from "@components/globalStyle/GlobalStyle";
import { ThemeProvider } from "@emotion/react";
import useTheme from "@hooks/useTheme";
import { router } from "@routes/routes";
import { RouterProvider } from "react-router-dom";

const AppProvider = (): JSX.Element => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
export default AppProvider;
