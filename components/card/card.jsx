import styled from "@emotion/styled";
import CardHeader from "./cardHeader";

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
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

const Card = ({ header, icon, children }) => {
  return (
    <DivWrapper>
      <CardHeader header={header} icon={icon} />
      <ContentWrapper>{children}</ContentWrapper>
    </DivWrapper>
  );
};

export default Card;
