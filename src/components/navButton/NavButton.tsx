import type { FC, PropsWithChildren } from "react";

import StyledNavButton from "./NavButton.styles";

const NavButton: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): JSX.Element => {
  return <StyledNavButton>{children}</StyledNavButton>;
};

export default NavButton;
