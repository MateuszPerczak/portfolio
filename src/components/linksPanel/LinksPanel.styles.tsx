import styled from "@emotion/styled";

const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .links-wrapper {
    display: flex;
    gap: 10px;
    @media (max-width: 350px) {
      flex-direction: column;
    }
  }
  .links-header {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const StyledLink = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  color: ${({ theme: { link } }): string => link};
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: none;
  border: 1px solid ${({ theme: { link } }): string => link};
  border-radius: 5px;
  transition: color 200ms, background-color 200ms, scale 200ms;
  &:hover {
    background-color: ${({ theme: { link } }): string => link};
    color: ${({ theme: { background } }): string => background};
  }
`;

export default StyledLinks;
