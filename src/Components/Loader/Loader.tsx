import { FC } from "react";
import { StyledLoader, AnimatedLoader } from "./Loader.style";
import Icon from "../Icon/Icon";

const Loader: FC = (): JSX.Element => {
  return (
    <StyledLoader>
      <AnimatedLoader
        animate={{
          scale: [1, 0.8, 2, 2, 2, 2, 2, 2, 1],
          y: [0, 0, -10, 10, 5, 5, 5, 5, 0],
          rotate: [0, 0, 0, 5, -5, 5, -5, 5, 0, 0],
          opacity: [1, 1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 1],
        }}
        transition={{
          easing: "easeOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <Icon>&#xE12A;</Icon>
      </AnimatedLoader>
    </StyledLoader>
  );
};

export default Loader;
