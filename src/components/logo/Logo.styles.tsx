import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledLogo = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme: { accent } }) => accent};
`;

export default StyledLogo;
