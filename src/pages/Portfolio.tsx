import type { FC } from "react";
import Page from "@components/page/Page";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import PageArticle from "@components/pageArticle/PageArticle";
import PageHeader from "@components/pageHeader/PageHeader";

const Portfolio: FC = (): JSX.Element => {
  return (
    <Page
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.6,
      }}
    >
      {/* <PageHeader>About this site</PageHeader> */}
      <FontAwesomeIcon icon={faReact} />
    </Page>
  );
};

export default Portfolio;
