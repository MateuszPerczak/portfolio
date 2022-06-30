import { ThemeProvider } from "@emotion/react";
import StylesProvider from "./Providers/StyleProvider";
import themes from "./Themes/themes";
import Nav from "./Components/Nav/Nav";

const App = () => {
  return (
    <ThemeProvider theme={themes["dark"]}>
      <StylesProvider />
      <Nav />
    </ThemeProvider>
  );
};

export default App;
