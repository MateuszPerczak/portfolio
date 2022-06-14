import styled from "@emotion/styled";

const PanelSetting = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 0.9rem;
  @media (max-width: 350px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export default PanelSetting;
