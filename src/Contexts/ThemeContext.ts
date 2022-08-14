import { createContext } from "react";
import { Themes } from "../Hooks/useTheme";

const ThemeContext = createContext({
  browserTheme: Themes.System,
  setbrowserTheme: (newTheme: Themes) => {},
});

export default ThemeContext;
