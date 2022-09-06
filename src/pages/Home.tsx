import type { FC } from "react";
import Greatings from "@components/greatings/Greatings";
import Page from "@components/page/Page";
import Project from "@components/project/Project";
import { projects } from "../data/projects";

const Home: FC = (): JSX.Element => {
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
      <Greatings />
      {projects.map(({ id, ...rest }) => {
        return <Project key={id} {...rest} />;
      })}
    </Page>
  );
};

export default Home;
