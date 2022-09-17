import styled from "@emotion/styled";

const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;
  @media (max-width: 768px) {
    flex: 1 1 auto;
  }
  background-color: ${({ theme: { project } }) => project};
`;

export default Skill;
