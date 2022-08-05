import useSystemTheme from "react-use-system-theme";
import themes from "../themes/themes";

const useTheme = () => {
  const systemTheme: string = useSystemTheme();
  return themes[systemTheme || "dark"];
};

export default useTheme;
