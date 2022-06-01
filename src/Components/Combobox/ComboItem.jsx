import styled from "@emotion/styled";

const StyledItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  border-radius: 10px;
  background: ${({ theme: { background } }) => {
    return background;
  }};
  &:hover {
    background: ${({ theme: { backgroundDark } }) => {
      return backgroundDark;
    }};
  }
`;

export default StyledItem;
