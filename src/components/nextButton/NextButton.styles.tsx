import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledNextButton = styled(Link)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme: { accent } }) => accent};
`;

export default StyledNextButton;
