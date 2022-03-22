import styled from "@emotion/styled";

const DivWrapper = styled.div`
  font-family: "Segoe Fluent Icons", sans-serif;
  font-size: 18px;
  cursor: pointer;
  padding: 10px;
  margin: 0 10px 0 10px;
  border-radius: 4px;
  transition: background-color 150ms ease-out;
  &:hover {
    background: ${({ theme: { backgroundDark } }) => {
      return backgroundDark;
    }};
  }
`;

const NavHamburger = ({ onClick, icon }) => {
  return <DivWrapper onClick={onClick}>{icon}</DivWrapper>;
};

export default NavHamburger;
