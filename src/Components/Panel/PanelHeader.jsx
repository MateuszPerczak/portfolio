import styled from "@emotion/styled";
import Icon from "../Icon/Icon";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

const PanelHeader = ({ header, icon }) => {
  return (
    <StyledHeader>
      <span>{header}</span>
      <Icon>{icon}</Icon>
    </StyledHeader>
  );
};

export default PanelHeader;
