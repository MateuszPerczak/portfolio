import type { FC } from "react";
import { memo } from "react";
import { StyledNavButton, NavButtonText } from "./NavButton.style";
import Icon from "../Icon/Icon";
import type { NavButtonProps } from "./NavButton.types";

const NavButton: FC<NavButtonProps> = ({
  icon,
  name,
  path,
}: NavButtonProps): JSX.Element => {
  return (
    <StyledNavButton to={path}>
      <Icon>{icon}</Icon>
      <NavButtonText>{name}</NavButtonText>
    </StyledNavButton>
  );
};

export default memo(NavButton);
