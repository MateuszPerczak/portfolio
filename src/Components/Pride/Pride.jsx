import styled from "@emotion/styled";

const StyledPride = styled.div`
  position: absolute;
  top: 0%;
  right: 0%;
  height: 100%;
  z-index: -1;
  background-image: url("./images/pride.webp");
  background-size: auto;
  background-position: center;
  background-repeat: repeat-y;
  background-position: 100% 0;
  overflow: hidden;
  user-select: none;
  opacity: 0.7;
`;

const StyledText = styled.div`
  position: relative;
  top: 50%;
  right: -40%;
  transform: rotate(-90deg);
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-shadow: -2px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const Pride = () => {
  return (
    <StyledPride>
      <StyledText>
        <span>HAPPY PRIDE 😋</span>
      </StyledText>
    </StyledPride>
  );
};

export default Pride;
