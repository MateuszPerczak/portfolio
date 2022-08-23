import styled from "@emotion/styled";
import { memo } from "react";
import NavSpacerComponent from "./NavSpacer.types";

const NavSpacer: NavSpacerComponent = styled.div`
  flex: 1;
`;

export default memo(NavSpacer);
