import styled from "@emotion/styled";

import type { TextWrapperProps } from "./TextWrapper.types";

const TextWrapper = styled.p<TextWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ gap }): string => {
    return `${gap ?? 0}px`;
  }};
  .title {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .description {
    font-size: 0.9rem;
  }
  .bold {
    font-weight: bold;
  }
`;

export default TextWrapper;
