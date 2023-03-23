import type { Theme } from "@emotion/react";
import useSystemTheme from "react-use-system-theme";

import themes, { ColorThemes } from "../themes/themes";

const useTheme = (): Theme => {
  const systemTheme: ColorThemes = useSystemTheme(ColorThemes.Dark);
  return themes[systemTheme];
};

export default useTheme;
