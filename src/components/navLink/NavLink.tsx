import type { FC } from "react";
import type { NavLinkProps } from "./NavLink.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledNavLink from "./NavLink.styles";

const NavLink: FC<NavLinkProps> = ({
  href,
  icon,
  ...rest
}: NavLinkProps): JSX.Element => {
  return (
    <StyledNavLink href={href} target="_blank" rel="noreferrer noopener" {...rest}>
      <FontAwesomeIcon icon={icon} />
    </StyledNavLink>
  );
};

export default NavLink;
