import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-top: 2px solid ${({ theme: { border } }): string => border};
  box-shadow: 0 0 5px ${({ theme: { shadow } }): string => shadow};
  background: ${({ theme: { footerTop, footerBottom } }): string =>
    `linear-gradient(${footerTop}, ${footerBottom})`};

  .footer-wrapper {
    display: flex;
    flex-direction: column;
    flex: 0 1 1000px;
    padding: 0px 20px;
    border-left: 2px solid ${({ theme: { border } }): string => border};
    border-right: 2px solid ${({ theme: { border } }): string => border};
    @media (max-width: 350px) {
      align-items: center;
    }
  }

  .title-link {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({ theme: { color } }): string => color};
    text-decoration: none;
  }

  .text-wrapper {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 350px) {
      justify-content: center;
    }
    align-items: center;
    gap: 10px;
    font-size: 0.8rem;
  }
`;

export default StyledFooter;
