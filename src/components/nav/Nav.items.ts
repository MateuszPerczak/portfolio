import Blog from "@icons/blog.svg?react";
import Code from "@icons/code.svg?react";

import type { NavItemProps } from "./components/navItem/NavItem.types";

export const navItems: NavItemProps[] = [
  {
    name: "Blog",
    to: "/blog",
    icon: Blog,
  },
  {
    name: "Development",
    to: "/dev",
    icon: Code,
  },
];
