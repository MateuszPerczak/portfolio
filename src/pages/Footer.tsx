import type { FC } from "react";
import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";
import PageContent from "@/components/pageContent/PageContent";
import Card from "@/components/card/Card";
import PageSection from "@/components/pageSection/PageSection";

const Footer: FC = (): JSX.Element => {
  return (
    <Page id="footer">
      <PageHeader header="O PORTFOLIO" description="INFORMACJE" />
      <PageContent>
        <PageSection header="UŻYTE BIBLIOTEKI">
          <Card>React</Card>
          <Card>Emotion</Card>
          <Card>Framer-motion</Card>
        </PageSection>
      </PageContent>
    </Page>
  );
};

export default Footer;
