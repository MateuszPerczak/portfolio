import styled from "@emotion/styled";

const DivWrapper = styled.div`
  font-family: "Segoe Fluent Icons", sans-serif;
  font-size: 18px;
  padding: 10px;
`;

const NavIcon = ({ icon }) => {
  return <DivWrapper>{icon}</DivWrapper>;
};

export default NavIcon;
