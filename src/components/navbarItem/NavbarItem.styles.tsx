import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledNavbarItem = styled(Link)`
  width: 100%;
  padding: 10px;
  text-decoration: none;
  white-space: nowrap;
  font-size: 1.1rem;
  transition: background-color 200ms, color 200ms;
  color: ${({ theme: { color } }) => color};
  &:hover {
    background-color: ${({ theme: { accent } }) => accent};
    color: ${({ theme: { navbar } }) => navbar};
    font-weight: bold;
  }
`;

export default StyledNavbarItem;
