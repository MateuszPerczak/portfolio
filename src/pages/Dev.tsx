import Header from "@components/header/Header";
import Page from "@components/page/Page";
import PageCard from "@components/pageCard/PageCard";
import TextWrapper from "@components/textWrapper/TextWrapper";
import type { FC } from "react";

const Dev: FC = (): JSX.Element => {
  return (
    <Page>
      <PageCard flexDirection="column">
        <Header>Development</Header>
        <TextWrapper>
          <span className="description bold">Here are some of my best projects</span>
          <span className="description">
            There will be more projects in the future 😋
          </span>
        </TextWrapper>
      </PageCard>
    </Page>
  );
};

export default Dev;
