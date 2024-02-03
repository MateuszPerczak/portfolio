import Button from "@components/button/Button";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

import StyledPageNotFound, { StyledExclamation } from "./PageNotFound.styles";

const PageNotFound = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <StyledPageNotFound>
      <div className="not-found-wrapper">
        <div className="not-found-message">
          <StyledExclamation />
          <h1>Page not found</h1>
          <Button onClick={(): void => navigate("")}>Go back</Button>
        </div>
      </div>
    </StyledPageNotFound>
  );
};

export default memo(PageNotFound);
