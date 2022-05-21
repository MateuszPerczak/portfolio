import { memo } from "react";
import { useSpring, animated } from "react-spring";
import styled from "@emotion/styled";
import Card from "../Card/Card";
import Icon from "../Icon/Icon";

const StyledNav = styled.div`
  width: 64px;
  background: ${({ theme: { backgroundDark } }) => {
    return backgroundDark;
  }};
  border-right: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

const Loader = () => {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      mass: 3,
      tension: 150,
    },
  });
  return (
    <Card>
      <StyledNav />
      <animated.div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...styles,
        }}
      >
        <Icon size={4}>&#xE149;</Icon>
      </animated.div>
    </Card>
  );
};

export default memo(Loader);
