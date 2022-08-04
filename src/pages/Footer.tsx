import type { FC } from "react";
import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";

const Footer: FC = (): JSX.Element => {
  return (
    <Page>
      <PageHeader header="O PORTFOLIO" description="NA KONIEC" />
    </Page>
  );
};

export default Footer;
