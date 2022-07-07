import styled from "@emotion/styled";

export const StyledPanelExp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 0.9rem;
`;

export const StyledPanelExpDate = styled.span`
  font-size: 0.8rem;
  color: ${({ theme: { date } }) => {
    return date;
  }};
`;
