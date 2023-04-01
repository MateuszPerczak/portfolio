import { ReactComponent as Spinner } from "@icons/spinner.svg";
import { memo } from "react";

import StyledLoader from "./Loader.styles";

const Loader = (): JSX.Element => {
  return (
    <StyledLoader>
      <span className="span-loader">
        <Spinner />
      </span>
    </StyledLoader>
  );
};

export default memo(Loader);
