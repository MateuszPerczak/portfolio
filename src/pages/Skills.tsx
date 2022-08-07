import type { FC } from "react";
import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";
import PageContent from "@/components/pageContent/PageContent";
import PageSection from "@/components/pageSection/PageSection";
import Skill from "@/components/skill/Skill";

const Skills: FC = (): JSX.Element => {
  return (
    <Page id="skills">
      <PageHeader header="UMIEJĘTNOŚCI" description="CO UMIEM?" />
      <PageContent flexDirection="column">
        <PageSection header="JĘZYKI PROGRAMOWANIA">
          <Skill header="REGULAR" description="TypeScript, JavaScript, Python" />
          <Skill header="JUNIOR" description="C#" />
        </PageSection>
        <PageSection header="JĘZYKI OPISOWE">
          <Skill description="HTML, CSS, SCSS, Markdown" />
        </PageSection>
        <PageSection header="KONTROLA WERSJI">
          <Skill description="Git, Github, GitLab, Github actions" />
        </PageSection>
        <PageSection header="ŚRODOWISKA WYKONYWANIA I IMPLEMENTACJE">
          <Skill description="NodeJS, PyPy" />
        </PageSection>
        <PageSection header="FRAMEWORKI, BIBLIOTEKI, ITP.">
          <Skill description="React, Next, Vite, Astro, Emotion, Webpack, Lodash, Framer-motion, React-querry, I18next, React-spring, ..." />
        </PageSection>
      </PageContent>
    </Page>
  );
};

export default Skills;
