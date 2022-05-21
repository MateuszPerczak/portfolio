import styled from "@emotion/styled";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";

const StyledItem = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  padding-left: 11px;
  gap: 10px;
  height: 40px;
  min-width: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background-color 200ms;
  background: ${({ theme: { backgroundDark } }) => {
    return backgroundDark;
  }};
  color: ${({ theme: { color } }) => {
    return color;
  }};
  &:hover {
    background: ${({ theme: { backgroundContrast } }) => {
      return backgroundContrast;
    }};
  }
`;

const NavItem = ({ icon, to, content, isOpen, setOpen }) => {
  return (
    <StyledItem to={to} onClick={() => setOpen(false)}>
      <Icon>{icon}</Icon>
      {isOpen ? <span>{content}</span> : null}
    </StyledItem>
  );
};

export default NavItem;
