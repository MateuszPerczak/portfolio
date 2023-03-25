import { ReactComponent as Spinner } from "@icons/spinner.svg";
import { FC, memo } from "react";

import StyledLoader from "./Loader.styles";

const Loader: FC = (): JSX.Element => {
  return (
    <StyledLoader>
      <span className="span-loader">
        <Spinner />
      </span>
    </StyledLoader>
  );
};

export default memo(Loader);
