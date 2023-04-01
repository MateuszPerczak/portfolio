import styled from "@emotion/styled";

const StyledLoader = styled.div`
  display: flex;
  flex: 1 0 100%;
  align-items: stretch;
  justify-content: center;
  .loader-wrapper {
    display: grid;
    place-items: center;
    flex: 1;
    max-width: 1000px;
    border-left: 2px solid ${({ theme: { border } }): string => border};
    border-right: 2px solid ${({ theme: { border } }): string => border};
    padding-bottom: 64px;
  }
  .loader {
    color: ${({ theme: { spinner } }): string => spinner};
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
  }
`;

export default StyledLoader;
