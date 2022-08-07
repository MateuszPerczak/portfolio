import styled from "@emotion/styled";

const Card = styled.div`
  padding: 15px 20px;
  background-color: ${({ theme: { card } }) => card};
  border-left: 2px solid ${({ theme: { accent } }) => accent};
`;

export default Card;
