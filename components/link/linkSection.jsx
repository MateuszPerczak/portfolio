import styled from "@emotion/styled";

const DivWrapper = styled.div`
  font-size: 0.9rem;
  border-radius: 5px;
  padding: 10px;

  user-select: ${({ alllowSection }) => {
    return alllowSection ? `all` : `none`;
  }};
`;

const TextWrapper = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
`;

const HeaderWrapper = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
`;

const LinkSection = ({ description, header, alllowSection = false }) => {
  return (
    <DivWrapper alllowSection={alllowSection}>
      <HeaderWrapper>{header}</HeaderWrapper>
      <TextWrapper>{description}</TextWrapper>
    </DivWrapper>
  );
};

export default LinkSection;
