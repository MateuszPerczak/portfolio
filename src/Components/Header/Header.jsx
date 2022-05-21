import styled from "@emotion/styled";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  padding: 20px;
  font-size: 1.5rem;
  user-select: none;
  z-index: 2;
  background: ${({ theme: { background } }) => {
    return background;
  }};
  border-bottom: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

export default StyledHeader;
