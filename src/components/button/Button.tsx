import styled from "@emotion/styled";

const Button = styled.button`
  all: unset;
  text-decoration: none;
  padding: 8px 10px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  transition: color 200ms, background-color 200ms;
  cursor: pointer;
  color: ${({ theme: { color } }): string => color};
  background-color: ${({ theme: { border } }): string => border};
  &.active {
    color: ${({ theme: { navItemActive } }): string => navItemActive};
  }
  &:hover {
    background-color: ${({ theme: { border } }): string => border};
  }
  &:focus-visible {
    outline: 1px solid ${({ theme: { color } }): string => color};
  }
`;

export default Button;
