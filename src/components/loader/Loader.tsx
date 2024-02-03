import Spinner from "@icons/spinner.svg?react";
import { memo } from "react";

import StyledLoader from "./Loader.styles";

const Loader = (): JSX.Element => {
  return (
    <StyledLoader>
      <div className="loader-wrapper">
        <span className="loader">
          <Spinner />
        </span>
      </div>
    </StyledLoader>
  );
};

export default memo(Loader);
