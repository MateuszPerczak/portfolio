import Header from "@components/header/Header";
import LinksPanel from "@components/linksPanel/LinksPanel";
import Page from "@components/page/Page";
import PageCard from "@components/pageCard/PageCard";
import TextWrapper from "@components/textWrapper/TextWrapper";
import { ReactComponent as Download } from "@icons/download.svg";
import { ReactComponent as Link } from "@icons/link.svg";
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
      <PageCard flexDirection="column">
        <TextWrapper>
          <span className="title">Sounder 5</span>
          <span className="description bold">
            Sounder 5 is a music player written in python
          </span>
        </TextWrapper>
        <LinksPanel
          links={[
            {
              icon: Link,
              title: "See more",
              url: "",
            },
            {
              icon: Download,
              title: "Download",
              url: "",
            },
          ]}
        />
      </PageCard>
    </Page>
  );
};

export default Dev;
