import styled from "@emotion/styled";
import Icon from "@components/icon/Icon";

const NavButton = styled(Icon)`
  cursor: pointer;
  color: ${({ theme: { accent } }) => accent};
`;

export default NavButton;
