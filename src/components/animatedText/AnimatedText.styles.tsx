import styled from "@emotion/styled";
import { m } from "framer-motion";

const StyledAnimatedText = styled(m.div)`
  display: grid;
  place-items: center;
  height: 400px;
  padding: 0 3vmin;
  .text-wrapper {
    display: inline-flex;
    flex-wrap: wrap;
    font-size: 6vmin;
    font-weight: bold;
  }
`;

export default StyledAnimatedText;
