import styled from "@emotion/styled";

const StyledPanelHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 16px;
  user-select: none;
  border-bottom: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

export default StyledPanelHeader;
