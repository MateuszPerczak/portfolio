import styled from "@emotion/styled";

const StyledFooter = styled.div`
  display: flex;
  flex: 0 0 300px;
  background-color: ${({ theme: { nav } }): string => nav};
  border-top: 1px solid ${({ theme: { border } }): string => border};
  box-shadow: 0 0 5px ${({ theme: { shadow } }): string => shadow};
`;

export default StyledFooter;
