import styled from "@emotion/styled";
import type { ProjectContentProps } from "./ProjectContent.types";

const StyledProjectContent = styled.div<ProjectContentProps>`
  display: flex;
  flex: 1 1 70%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
`;

export default StyledProjectContent;
