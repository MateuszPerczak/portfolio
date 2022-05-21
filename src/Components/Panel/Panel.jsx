import styled from "@emotion/styled";

const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  border-radius: 10px;
  background: ${({ theme: { backgroundLight, background } }) => {
    return `linear-gradient(45deg, ${backgroundLight}, ${background})`;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

const Panel = (props) => {
  return <StyledPanel {...props} />;
};

export default Panel;
