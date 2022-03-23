import styled from "@emotion/styled";

const DivWrapper = styled.div`
  font-size: 0.9rem;
  border-radius: 5px;
  padding: 5px;
`;

const CardWork = ({ from, to, description }) => {
  return (
    <DivWrapper>
      <h4>{description}</h4>
      <span>
        {from} - {to}
      </span>
    </DivWrapper>
  );
};

export default CardWork;
