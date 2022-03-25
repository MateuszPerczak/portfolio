import styled from "@emotion/styled";

const DivWrapper = styled.div`
  font-size: 0.9rem;
  border-radius: 5px;
  padding: 5px;
`;

const CardText = ({ header, description }) => {
  return (
    <DivWrapper>
      <h4>{header}</h4>
      {description}
    </DivWrapper>
  );
};

export default CardText;
