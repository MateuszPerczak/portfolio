import Page from "@components/page/Page";
import styled from "@emotion/styled";
import { memo } from "react";

const StyledPageNotFound = styled(Page)`
  display: grid;
  place-items: center;
  flex: 1;
`;

export default memo(StyledPageNotFound);
