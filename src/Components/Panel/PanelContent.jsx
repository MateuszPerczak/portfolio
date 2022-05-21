import styled from "@emotion/styled";

const StyledContent = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => {
    return flexDirection;
  }};
  width: 100%;
  padding: 10px;
  gap: 10px;
  flex-wrap: ${({ flexWrap }) => {
    return flexWrap;
  }};
  flex-grow: ${({ flexGrow }) => {
    return flexGrow;
  }};
`;

const PanelContent = ({
  children,
  flexDirection = "column",
  flexWrap = "nowrap",
  flexGrow = 0,
}) => {
  return (
    <StyledContent
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      flexGrow={flexGrow}
    >
      {children}
    </StyledContent>
  );
};

export default PanelContent;
