import { ReactComponent as Blog } from "@icons/blog.svg";
import { ReactComponent as Code } from "@icons/code.svg";

import type { NavItemProps } from "./components/navItem/NavItem.types";

export const navItems: NavItemProps[] = [
  // {
  //   name: "Blog",
  //   to: "/blog",
  //   icon: Blog,
  // },
  {
    name: "Development",
    to: "/dev",
    icon: Code,
  },
];
