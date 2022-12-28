import type { HTMLAttributes, PropsWithChildren } from "react";
import type { LinkProps } from "react-router-dom";

export type NavButtonProps = LinkProps &
  PropsWithChildren &
  HTMLAttributes<HTMLDivElement>;
