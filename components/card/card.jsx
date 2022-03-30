import styled from "@emotion/styled";
import CardHeader from "./cardHeader";

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  flex: ${({ flex }) => {
    return flex;
  }};
  min-width: 350px;
  @media (max-width: 460px) {
    min-width: fit-content;
  }
  background: ${({ theme: { background, backgroundDark } }) => {
    return `linear-gradient(-45deg, ${background}, ${backgroundDark})`;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Card = ({ header, icon, children, flex = 0 }) => {
  return (
    <DivWrapper flex={flex}>
      <CardHeader header={header} icon={icon} />
      <ContentWrapper>{children}</ContentWrapper>
    </DivWrapper>
  );
};

export default Card;
