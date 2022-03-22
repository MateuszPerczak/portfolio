import styled from "@emotion/styled";

const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 59px;
  box-shadow: 0 10px 15px 0
    ${({ theme: { shadow } }) => {
      return shadow;
    }};
  position: sticky;
  top: 0;
  z-index: 2;
  font-size: 1.3rem;
  font-weight: 700;
  background: ${({ theme: { background } }) => {
    return background;
  }};
  border-bottom: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

const PageHeader = ({ header }) => {
  return <DivWrapper>{header}</DivWrapper>;
};

export default PageHeader;
