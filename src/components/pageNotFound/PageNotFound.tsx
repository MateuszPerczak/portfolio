import type { FC } from "react";
import StyledPageNotFound, { PageHeader } from "./PageNotFound.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoo } from "@fortawesome/free-solid-svg-icons";

const PageNotFound: FC = (): JSX.Element => {
  return (
    <StyledPageNotFound>
      <FontAwesomeIcon icon={faPoo} />
      <PageHeader>Page Not Found</PageHeader>
    </StyledPageNotFound>
  );
};
export default PageNotFound;
