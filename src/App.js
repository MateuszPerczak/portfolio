import { ThemeProvider } from "@emotion/react";
import StylesProvider from "./Providers/StyleProvider";
import themes from "./Themes/themes";
import Nav from "./Components/Nav/Nav";
import Page from "./Components/Page/Page";

const App = () => {
  return (
    <ThemeProvider theme={themes["dark"]}>
      <StylesProvider />
      <Nav />
      <Page></Page>
    </ThemeProvider>
  );
};

export default App;
