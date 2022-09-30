import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import type { StyleProps } from "./NextButton.types";

const StyledNextButton = styled(Link)<StyleProps>`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme: { accent, inactive }, disabled }) => (disabled ? inactive : accent)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

export default StyledNextButton;
