import { FC } from "react";
import { StyledLoader, AnimatedLoader } from "./Loader.style";
import Icon from "../Icon/Icon";

const Loader: FC = (): JSX.Element => {
  return (
    <StyledLoader>
      <AnimatedLoader
        animate={{ opacity: 1, transform: "rotate(360deg)" }}
        transition={{
          type: "spring",
          mass: 0.6,
          stiffness: 50,
          repeat: Infinity,
          repeatDelay: 0.1,
        }}
      >
        <Icon>&#xE72C;</Icon>
      </AnimatedLoader>
    </StyledLoader>
  );
};

export default Loader;
