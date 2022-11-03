import styled from "@emotion/styled";
import { memo } from "react";

const PageHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  flex: 0 1 100px;
  width: 100%;
  @media (max-width: 768px) {
    padding: 32px 32px 16px 32px;
  }
  padding: 32px;
  max-width: 1000px;
  font-size: clamp(1rem, 10vw, 2.5rem);
  font-weight: bold;
`;

export default memo(PageHeader);
