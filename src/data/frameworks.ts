import type { FrameworkProps } from "@components/framework/Framework.types";
import { faReact, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
type FrameworkWithId = FrameworkProps & { id: number };

export const framerowks: FrameworkWithId[] = [
  {
    id: 0,
    icon: faReact,
    text: "React",
    href: "https://reactjs.org/",
  },
  {
    id: 1,
    icon: faCode,
    text: "Emotion",
    href: "https://emotion.sh/docs/introduction",
  },
  {
    id: 2,
    icon: faCode,
    text: "Vite",
    href: "https://vitejs.dev/",
  },
  {
    id: 3,
    icon: faFontAwesome,
    text: "Fontawesome",
    href: "https://fontawesome.com/",
  },
  {
    id: 4,
    icon: faCode,
    text: "Framer Motion",
    href: "https://www.framer.com/motion/",
  },
  {
    id: 5,
    icon: faCode,
    text: "RxJS",
    href: "https://rxjs.dev/",
  },
  {
    id: 6,
    icon: faCode,
    text: "React Router Dom",
    href: "https://reactrouter.com/en/main",
  },
];
