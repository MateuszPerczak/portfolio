import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledNavLogo = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme: { accent } }): string => accent};
`;

export default StyledNavLogo;
