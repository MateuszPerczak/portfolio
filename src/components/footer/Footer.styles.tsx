import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  display: grid;
  place-items: center;
  padding: 1rem;
`;

export const FooterContent = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  padding: 0 0.5rem;
`;

export const FooterCopyright = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
`;

export default StyledFooter;
