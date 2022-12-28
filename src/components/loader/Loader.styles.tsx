import styled from "@emotion/styled";

const StyledLoader = styled.div`
  display: flex;
  flex: 1 0 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 60px;
`;

export const StyledLoaderIcon = styled.span`
  color: ${({ theme: { accent } }): string => accent};
  line-height: 0;
  font-size: 2rem;
  animation: spin 500ms linear infinite forwards;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default StyledLoader;
