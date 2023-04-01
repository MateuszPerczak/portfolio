import { memo } from "react";

import StyledPageNotFound, { StyledExclamation } from "./PageNotFound.styles";

const PageNotFound = (): JSX.Element => (
  <StyledPageNotFound>
    <div className="not-found-message">
      <StyledExclamation />
      <h1>Page not found</h1>
    </div>
  </StyledPageNotFound>
);

export default memo(PageNotFound);
