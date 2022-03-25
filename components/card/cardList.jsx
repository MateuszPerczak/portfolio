import styled from "@emotion/styled";

const ListWrapper = styled.ul`
  list-style: circle;
`;

const DivWrapper = styled.div`
  font-size: 0.9rem;
  padding: 5px;
`;

const CardList = ({ header, children }) => {
  return (
    <DivWrapper>
      <h4>{header}</h4>
      <ListWrapper>{children}</ListWrapper>
    </DivWrapper>
  );
};

export default CardList;
