import styled from "@emotion/styled";

const FooterWrapper = styled.footer`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  border-top: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <span>Mateusz Perczak</span>
      <span>&copy; 2022</span>
    </FooterWrapper>
  );
};

export default Footer;
