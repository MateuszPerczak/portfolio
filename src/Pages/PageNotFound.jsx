import styled from "@emotion/styled";
import { animated, useSpring } from "react-spring";
import Icon from "../Components/Icon/Icon";

const StyledWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
`;

const StyledPageNotFound = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.header`
  font-size: 2rem;
`;

const PageNotFound = () => {
  const animatedPage = useSpring({
    from: { opacity: 0, transform: "scale(0.3)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 400 },
  });

  const animatedText = useSpring({
    from: { opacity: 0, height: "0px" },
    to: { opacity: 1, height: "50px" },
    config: { tension: 400 },
    delay: 500,
  });

  return (
    <StyledWrapper>
      <StyledPageNotFound style={animatedPage}>
        <Icon size={4}>&#xEA92;</Icon>
        <animated.div style={animatedText}>
          <StyledHeader>Page not found</StyledHeader>
        </animated.div>
      </StyledPageNotFound>
    </StyledWrapper>
  );
};

export default PageNotFound;
