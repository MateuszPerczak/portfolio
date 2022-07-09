import { FC } from "react";
import { StyledLoader, AnimatedLoader } from "./Loader.style";
import Icon from "../Icon/Icon";
import { useSpring } from "react-spring";

const Loader: FC = (): JSX.Element => {
  const animatedLoader = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
    config: { mass: 3, tension: 150 },
    loop: true,
  });

  return (
    <StyledLoader>
      <AnimatedLoader style={animatedLoader}>
        <Icon>&#xE72C;</Icon>
      </AnimatedLoader>
    </StyledLoader>
  );
};

export default Loader;
