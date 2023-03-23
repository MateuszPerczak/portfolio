import type { FC } from "react";
import { memo } from "react";

import StyledPageNotFound, { StyledExclamation } from "./PageNotFound.styles";

const PageNotFound: FC = (): JSX.Element => (
  <StyledPageNotFound>
    <div className="not-found-message">
      <StyledExclamation />
      <h1>Page not found</h1>
    </div>
  </StyledPageNotFound>
);

export default memo(PageNotFound);
