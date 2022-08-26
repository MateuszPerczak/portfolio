import type { FC } from "react";
import StyledArticle from "./Article.styles";
import type ArticleProps from "./Article.types";

const Article: FC<ArticleProps> = ({ children, ...rest }): JSX.Element => {
  return <StyledArticle {...rest}>{children}</StyledArticle>;
};

export default Article;
