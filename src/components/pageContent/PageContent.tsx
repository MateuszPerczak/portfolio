import styled from "@emotion/styled";
import type PageContentProps from "./PageContent.types";

const PageContent = styled.div<PageContentProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? "wrap" : "nowrap")};
  gap: 10px;
  width: 100%;
  padding: 20px 0;
`;

export default PageContent;
