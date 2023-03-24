import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  display: flex;
  flex: 0 0 300px;
  border-top: 2px solid ${({ theme: { border } }): string => border};
  box-shadow: 0 0 5px ${({ theme: { shadow } }): string => shadow};
  background: ${({ theme: { footerTop, footerBottom } }): string =>
    `linear-gradient(${footerTop}, ${footerBottom})`};
`;

export default StyledFooter;
