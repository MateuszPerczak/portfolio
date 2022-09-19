import type { FrameworkProps } from "@components/framework/Framework.types";
import { faReact, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export const frameworks: FrameworkProps[] = [
  {
    icon: faReact,
    text: "React",
    href: "https://reactjs.org/",
  },
  {
    icon: faCode,
    text: "Emotion",
    href: "https://emotion.sh/docs/introduction",
  },
  {
    icon: faCode,
    text: "Vite",
    href: "https://vitejs.dev/",
  },
  {
    icon: faFontAwesome,
    text: "Fontawesome",
    href: "https://fontawesome.com/",
  },
  {
    icon: faCode,
    text: "Framer Motion",
    href: "https://www.framer.com/motion/",
  },
  {
    icon: faCode,
    text: "RxJS",
    href: "https://rxjs.dev/",
  },
  {
    icon: faCode,
    text: "React Router Dom",
    href: "https://reactrouter.com/en/main",
  },
];
