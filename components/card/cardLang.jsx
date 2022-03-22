import styled from "@emotion/styled";

const DivWrapper = styled.div`
  font-size: 0.9rem;
  border-radius: 5px;
  padding: 5px;

  ${
    "" /* background: ${({ theme: { backgroundDark } }) => {
    return backgroundDark;
  }}; */
  }
`;

const CardLang = ({ lang, header }) => {
  return (
    <DivWrapper>
      <h4>{header}</h4>
      {lang}
    </DivWrapper>
  );
};

export default CardLang;
