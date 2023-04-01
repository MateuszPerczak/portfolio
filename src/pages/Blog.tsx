import Header from "@components/header/Header";
import LinksPanel from "@components/linksPanel/LinksPanel";
import Page from "@components/page/Page";
import PageCard from "@components/pageCard/PageCard";
import TextWrapper from "@components/textWrapper/TextWrapper";
import { ReactComponent as Link } from "@icons/link.svg";

const Blog = (): JSX.Element => {
  return (
    <Page>
      <PageCard flexDirection="column">
        <Header>
          <span>Blog</span>
        </Header>
        <TextWrapper>
          <span className="description bold">Just a basic summary of all events!</span>
        </TextWrapper>
      </PageCard>
      <PageCard flexDirection="column">
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
        <LinksPanel
          links={[
            {
              icon: Link,
              title: "See more",
              url: "https://github.com/MateuszPerczak",
            },
          ]}
        />
      </PageCard>
    </Page>
  );
};

export default Blog;
