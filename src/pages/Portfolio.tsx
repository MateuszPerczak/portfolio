import type { FC } from "react";
import Page from "@components/page/Page";

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
      <h1>Moje portfolio</h1>
    </Page>
  );
};

export default Portfolio;
