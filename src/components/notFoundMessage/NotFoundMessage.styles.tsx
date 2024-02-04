import styled from "@emotion/styled";
import { m } from "framer-motion";

const StyledNotFoundMessage = styled(m.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: clamp(300px, 80vw, 400px);
  gap: 10px;
`;

export const StyledExclamation = styled(m.div)`
  font-size: 4rem;
  color: ${({ theme: { yellow } }): string => yellow};
  line-height: 0;
`;

export const StyledLabel = styled(m.span)`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const StyledDescription = styled(m.span)`
  font-size: 0.8rem;
  text-align: center;
  color: ${({ theme: { link } }): string => link};
`;

export const StyledButton = styled(m.button)`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  height: 36px;
  padding: 0 10px;
  font-weight: bold;
  color: ${({ theme: { link } }): string => link};
  border: 1px solid ${({ theme: { border } }): string => border};
  border-radius: 5px;
  background-color: ${({ theme: { border } }): string => border};
  &:focus-visible {
    outline: 1px solid ${({ theme: { color } }): string => color};
  }
`;

export default StyledNotFoundMessage;
