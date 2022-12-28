import type { FC } from "react";
import { memo } from "react";

import StyledPageNotFound, {
  StyledBomb,
  StyledPageNotFoundWrapper,
} from "./PageNotFound.styles";

const PageNotFound: FC = (): JSX.Element => (
  <StyledPageNotFound>
    <StyledPageNotFoundWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <StyledBomb />
      <h1>Page not found</h1>
    </StyledPageNotFoundWrapper>
  </StyledPageNotFound>
);

export default memo(PageNotFound);
