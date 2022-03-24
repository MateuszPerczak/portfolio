import styled from "@emotion/styled";

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 10px;
  background: ${({ theme: { background, backgroundDark } }) => {
    return `linear-gradient(-45deg, ${background}, ${backgroundDark})`;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
  }
`;

const Card = ({ children }) => {
  return <DivWrapper>{children}</DivWrapper>;
};

export default Card;
