import styled from "@emotion/styled";

const DivWrapper = styled.div`
  font-family: "Catamaran", sans-serif;
  white-space: nowrap;
`;

const NavText = ({ text, isNavOpen }) => {
  return <DivWrapper>{isNavOpen && text}</DivWrapper>;
};

export default NavText;
