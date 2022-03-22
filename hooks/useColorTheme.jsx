import { useState, useEffect } from "react";
import { fromEvent } from "rxjs";
import lightTheme from "../themes/lightTheme";
import darkTheme from "../themes/darkTheme";

const useColorTheme = () => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const themeMatch = window?.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = () => {
      setTheme(themeMatch?.matches ? darkTheme : lightTheme);
    };
    handleThemeChange();
    const subscription = fromEvent(themeMatch, "change").subscribe(
      handleThemeChange
    );
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return { theme };
};

export default useColorTheme;
