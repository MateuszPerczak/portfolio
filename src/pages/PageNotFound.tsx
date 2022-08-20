import Page from "@/components/page/Page";
import PageHeader from "@/components/pageHeader/PageHeader";
import type { FC } from "react";

const PaheNotFound: FC = (): JSX.Element => {
  return (
    <Page>
      <PageHeader
        header="404 PAGE NOT FOUND"
        description="STRONA POD TYM ADRESEM NIE ISTNIEJE"
      />
    </Page>
  );
};

export default PaheNotFound;
