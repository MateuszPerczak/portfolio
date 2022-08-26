import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type ArticleProps from "./Article.types";

const StyledArticle = styled(motion.article)<Pick<ArticleProps, "useAccent">>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-weight: bold;
  font-size: 6rem;
  width: 100%;
  height: 100vh;
  background: ${({ theme: { accent, background }, useAccent }) =>
    useAccent ? accent : background};
  color: ${({ theme: { color, accent }, useAccent }) => (useAccent ? color : accent)};
`;

export default StyledArticle;
