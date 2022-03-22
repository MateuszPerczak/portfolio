import styled from "@emotion/styled";

const DivWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

const NavSeperator = () => {
  return <DivWrapper></DivWrapper>;
};

export default NavSeperator;
