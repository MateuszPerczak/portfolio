import styled from "@emotion/styled";

const Card = styled.div`
  display: flex;
  padding: 10px;
  background-color: ${({ theme: { card } }) => card};
  /* border: 2px solid ${({ theme: { accent } }) => accent}; */
  box-shadow: 0 0 10px ${({ theme: { shadow } }) => shadow};
`;

export default Card;
