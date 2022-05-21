import styled from "@emotion/styled";
import Text from "../Text/Text";

const StyledSkill = styled.div`
  displey: flex;
  flex-direction: column;
  padding-right: 10px;
`;

const PanelSkill = ({ description, header }) => {
  return (
    <StyledSkill>
      <header>{header}</header>
      <Text fontSize={0.8}>{description}</Text>
    </StyledSkill>
  );
};

export default PanelSkill;
