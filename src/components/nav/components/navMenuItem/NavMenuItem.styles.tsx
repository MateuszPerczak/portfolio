import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledNavMenuItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1 1 60px;
  padding: 20px;
  text-decoration: none;
  transition: background-color 200ms;
  cursor: pointer;
  color: ${({ theme: { accent } }): string => accent};
  &:hover {
    background-color: ${({ theme: { navButton } }): string => navButton};
  }
`;

export default StyledNavMenuItem;
