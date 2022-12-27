import { ReactComponent as Spinner } from "@icons/spinner.svg";
import type { FC } from "react";

import StyledLoader, { StyledLoaderIcon } from "./Loader.styles";

const Loader: FC = (): JSX.Element => {
  return (
    <StyledLoader>
      <StyledLoaderIcon>
        <Spinner />
      </StyledLoaderIcon>
    </StyledLoader>
  );
};

export default Loader;
