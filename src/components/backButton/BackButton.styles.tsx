import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledBackButton = styled(Link)`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme: { accent } }) => accent};
`;

export default StyledBackButton;
