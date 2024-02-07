import AnimationProvider from "@components/animationProvider/AnimationProvider";
import styled from "@emotion/styled";
import { memo } from "react";

const StyledProjectsAnimationProvider = styled(AnimationProvider)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

export default memo(StyledProjectsAnimationProvider);
