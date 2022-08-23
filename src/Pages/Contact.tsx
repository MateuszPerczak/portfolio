import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import Page from "../Components/Page/Page";
import Panel from "../Components/Panel/Panel";
import PanelHeader from "../Components/PanelHeader/PanelHeader";
import PanelContent from "../Components/PanelContent/PanelContent";
import usefulLinks from "../Data/usefulLinks.json";
import Link from "../Components/Link/Link";

const Contact: FC = (): JSX.Element => {
  const { t } = useTranslation("contact");

  return (
    <Page header={t("contact")}>
      <Panel>
        <PanelHeader header="Email" icon="&#xE168;" />
        <PanelContent>
          <Link href="mailto:mateusz.perczak.mp@gmail.com">
            mateusz.perczak.mp@gmail.com
          </Link>
        </PanelContent>
      </Panel>
      <Panel>
        <PanelHeader header={t("other")} icon="&#xE167;" />
        <PanelContent>
          {usefulLinks.map((link, index) => {
            return (
              <Link key={index} href={link.href}>
                {link.header}
              </Link>
            );
          })}
        </PanelContent>
      </Panel>
    </Page>
  );
};

export default memo(Contact);
