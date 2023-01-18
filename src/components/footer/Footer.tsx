import type { FC } from "react";
import { memo } from "react";

import StyledFooter from "./Footer.styles";

const Footer: FC = (): JSX.Element => {
  return <StyledFooter></StyledFooter>;
};

export default memo(Footer);
