import styled from "@emotion/styled";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  padding: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  user-select: none;
  z-index: 2;
  background: ${({ theme: { backgroundBlur } }) => {
    return backgroundBlur;
  }};
  border-bottom: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
  animation: 200ms blur-header 100ms both;
  @keyframes blur-header {
    0% {
      backdrop-filter: blur(0px) saturate(0%);
    }
    100% {
      backdrop-filter: blur(5px) saturate(180%);
    }
  }
`;

export default StyledHeader;
