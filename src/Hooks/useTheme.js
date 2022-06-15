import darkTheme from "../Themes/darkTheme";
import lightTheme from "../Themes/lightTheme";

const useTheme = () => {
  // initialize the theme

  let selectedTheme = "system";
  const localTheme = localStorage.getItem("theme");
  if (localTheme) {
    selectedTheme = localTheme;
  } else {
    localStorage.setItem("theme", "system");
  }

  console.log(selectedTheme);

  //   if (localTheme) {
  //     if (localTheme === "dark") {
  //     } else if (localTheme === "light") {
  //     } else {
  //     }
  //   } else {
  //     localStorage.setItem("theme", "system");
  //     return window.matchMedia("(prefers-color-scheme: dark)").matches
  //       ? "dark"
  //       : "light";
  //}

  // localStorage.setItem('theme', 'light');
  // const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
};

// const themes = {
//   light: lightTheme,
//   dark: darkTheme,
//   system: systemTheme,
// };

export default useTheme;
