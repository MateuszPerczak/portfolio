import GlobalStyle from "@components/globalStyle/GlobalStyle";
import { ThemeProvider } from "@emotion/react";
import useTheme from "@hooks/useTheme";
import { router } from "@routes/routes";
import { domAnimation, LazyMotion } from "framer-motion";
import { RouterProvider } from "react-router-dom";

const AppProvider = (): JSX.Element => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LazyMotion features={domAnimation} strict>
        <RouterProvider router={router} />
      </LazyMotion>
    </ThemeProvider>
  );
};
export default AppProvider;
