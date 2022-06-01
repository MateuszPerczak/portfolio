import styled from "@emotion/styled";
import Icon from "../Icon/Icon";

const StyledHamburger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: background-color 200ms, color 300ms;
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
  &:active {
    background: ${({ theme: { background } }) => {
      return background;
    }};
`;

const NavHamburger = ({ onClick, isOpen }) => {
  return (
    <StyledHamburger onClick={onClick}>
      <Icon>{isOpen ? "\uE76B" : "\uE76C"}</Icon>
    </StyledHamburger>
  );
};

export default NavHamburger;
