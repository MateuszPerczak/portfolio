import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledNavItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  padding: 8px 10px;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 200ms;
  cursor: pointer;
  color: ${({ theme: { accent } }): string => accent};
  &:hover {
    background-color: ${({ theme: { navButton } }): string => navButton};
  }
`;

export default StyledNavItem;
