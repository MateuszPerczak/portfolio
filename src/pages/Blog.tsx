import Header from "@components/header/Header";
import Page from "@components/page/Page";
import PageCard from "@components/pageCard/PageCard";
import TextWrapper from "@components/textWrapper/TextWrapper";
import { ReactComponent as Bullhorn } from "@icons/bullhorn.svg";
import type { FC } from "react";

const Blog: FC = (): JSX.Element => {
  return (
    <Page>
      <PageCard flexDirection="column">
        <Header>
          <Bullhorn />
          <span>Blog</span>
        </Header>
        <TextWrapper>
          <span className="description bold">Just a basic summary of all events!</span>
        </TextWrapper>
      </PageCard>
      <PageCard>
        <TextWrapper>
          <span className="title">Updated sounder code!</span>
          <span className="description bold">
            Because of spaghetti code the maintenance of this app became basically
            imposable.
          </span>
          <span className="description">
            Estimated time of completion: <span className="bold">Some day :D</span>
          </span>
        </TextWrapper>
      </PageCard>
    </Page>
  );
};

export default Blog;
