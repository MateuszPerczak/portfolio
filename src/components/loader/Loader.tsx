import type { FC } from "react";
import { memo } from "react";
import StyledLoader, { StyledLoaderElement } from "./Loader.styles";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loader: FC = (): JSX.Element => {
  const spring = {
    type: "spring",
    stiffness: 90,
    loop: Infinity,
  };
  return (
    <StyledLoader>
      <StyledLoaderElement
        initial={{ transform: "rotate(0deg)" }}
        animate={{ transform: "rotate(360deg)" }}
        transition={spring}
      >
        <FontAwesomeIcon icon={faCircleNotch} />
      </StyledLoaderElement>
    </StyledLoader>
  );
};

export default memo(Loader);
