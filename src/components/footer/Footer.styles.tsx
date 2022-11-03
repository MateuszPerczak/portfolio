import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  display: grid;
  place-items: center;
  padding: 16px;
  background-color: ${({ theme: { footer } }) => footer};
`;

export const FooterContent = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  padding: 0 8px;
`;

export const FooterCopyright = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: bold;
`;

export default StyledFooter;
