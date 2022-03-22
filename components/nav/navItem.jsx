import styled from "@emotion/styled";
import NavIcon from "./navIcon";
import NavText from "./navText";

const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  width: calc(100% - 20px);
  text-decoration: none;
  border-radius: 4px;
  margin: 0 10px 0 10px;
  transition: background-color 150ms ease-out;
  color: ${({ theme: { color } }) => {
    return color;
  }};
  &:hover {
    background: ${({ theme: { backgroundDark } }) => {
      return backgroundDark;
    }};
  }
`;

const NavItem = ({ text, icon, isNavOpen, href, onClick }) => {
  return (
    <LinkWrapper href={href} onClick={onClick}>
      <NavIcon icon={icon} />
      <NavText text={text} isNavOpen={isNavOpen} />
    </LinkWrapper>
  );
};

export default NavItem;
