import styled from "@emotion/styled";

const DivWrapper = styled.div`
  font-size: 0.9rem;
  border-radius: 5px;
  padding: 10px;
  user-select: ${({ alllowSection }) => {
    return alllowSection ? `all` : `none`;
  }};
`;

const LinkSection = ({ description, header, alllowSection = false }) => {
  return (
    <DivWrapper alllowSection={alllowSection}>
      <h4>{header}</h4>
      {description}
    </DivWrapper>
  );
};

export default LinkSection;
