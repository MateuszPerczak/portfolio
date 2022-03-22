import styled from "@emotion/styled";

const IconWrapper = styled.div`
  font-family: "Segoe Fluent Icons", sans-serif;
  font-size: 1.2rem;
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

const CardHeader = ({ header, icon }) => {
  return (
    <HeaderWrapper>
      <h3>{header}</h3>
      <IconWrapper>{icon}</IconWrapper>
    </HeaderWrapper>
  );
};

export default CardHeader;
