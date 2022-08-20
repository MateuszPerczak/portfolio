import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledNavbarItem = styled(Link)`
  width: 100%;
  padding: 10px;
  text-decoration: none;
  white-space: nowrap;
  font-size: 1.1rem;
  transition: color 200ms, transform 200ms;
  color: ${({ theme: { color } }) => color};
  &:hover {
    color: ${({ theme: { accent } }) => accent};
    transform: translateX(10px);
  }
`;

export default StyledNavbarItem;
