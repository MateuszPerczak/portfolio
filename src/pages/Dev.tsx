import Page from "@components/page/Page";
import PageCard from "@components/pageCard/PageCard";
import type { Variants } from "framer-motion";
import type { FC } from "react";

export const transition: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Dev: FC = (): JSX.Element => {
  return (
    <Page variants={transition} initial="initial" animate="animate" exit="exit">
      <PageCard>dsdsdsds</PageCard>
    </Page>
  );
};

export default Dev;
