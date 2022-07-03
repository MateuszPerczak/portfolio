import { FC } from "react";
import { StyledNavButton, NavButtonText } from "./NavButton.style";
import Icon from "../Icon/Icon";

type NavButtonProps = {
  icon: string;
  name: string;
  path: string;
};

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

export default NavButton;
