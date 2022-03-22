import styled from "@emotion/styled";

const DivWrapper = styled.div`
  padding: 10px;

  background: ${({ theme: { background, backgroundDark } }) => {
    return `linear-gradient(-45deg, ${background}, ${backgroundDark})`;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

const SkillCard = ({ header }) => {
  return (
    <DivWrapper>
      <h3>{header}</h3>
    </DivWrapper>
  );
};

export default SkillCard;
