import NotFoundMessage from "@components/notFoundMessage/NotFoundMessage";

import StyledPageNotFound from "./PageNotFound.styles";

const PageNotFound = (): JSX.Element => {
  return (
    <StyledPageNotFound>
      <NotFoundMessage />
    </StyledPageNotFound>
  );
};

export default PageNotFound;
