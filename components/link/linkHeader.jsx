import styled from "@emotion/styled";

const HeaderWrapper = styled.div`
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

const IconWrapper = styled.div`
  font-family: "Segoe Fluent Icons", sans-serif;
  font-size: 1.2rem;
`;

const LinkHeader = ({ header, icon }) => {
  return (
    <HeaderWrapper>
      <h1>{header}</h1>
      <IconWrapper>{icon}</IconWrapper>
    </HeaderWrapper>
  );
};

export default LinkHeader;
