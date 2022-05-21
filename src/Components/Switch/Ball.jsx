import styled from "@emotion/styled";

const StyledBall = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  z-index: 1;
  background: ${({ theme: { ball } }) => {
    return ball;
  }};
`;

export default StyledBall;
