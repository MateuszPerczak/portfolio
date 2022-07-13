import styled from "@emotion/styled";
import LinkComponent from "./Link.types";

const StyledLink: LinkComponent = styled.a`
  color: ${({ theme: { color } }) => {
    return color;
  }};
  text-overflow: ellipsis;
  overflow: hidden;
`;

export default StyledLink;
