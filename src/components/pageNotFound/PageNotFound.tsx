import type { FC } from "react";
import StyledPageNotFound, { PageHeader } from "./PageNotFound.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoo } from "@fortawesome/free-solid-svg-icons";
import BackButton from "@components/backButton/BackButton";

const PageNotFound: FC = (): JSX.Element => {
  return (
    <StyledPageNotFound
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.6,
      }}
    >
      <FontAwesomeIcon icon={faPoo} />
      <PageHeader>Page Not Found</PageHeader>
      <BackButton to="/" text="Go back" aria-label="Go back" />
    </StyledPageNotFound>
  );
};
export default PageNotFound;
