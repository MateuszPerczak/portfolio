import { FC } from "react";
import { useTranslation } from "react-i18next";
import Page from "../Components/Page/Page";
import Panel from "../Components/Panel/Panel";
import PanelHeader from "../Components/PanelHeader/PanelHeader";
import PanelContent from "../Components/PanelContent/PanelContent";
import PanelImage from "../Components/PanelImage/PanelImage";
import usefulLinks from "../Data/usefulLinks.json";
import Link from "../Components/Link/Link";

const AboutMe: FC = (): JSX.Element => {
  const { t } = useTranslation("aboutMe");

  return (
    <Page header={t("aboutMe")}>
      <Panel>
        <PanelHeader header={t("somethingAboutMe")} icon="&#xE006;" />
        <PanelContent>
          <PanelImage
            src="https://avatars.githubusercontent.com/u/40388335?v=4"
            alt="Avatar"
            description={t("description")}
          />
        </PanelContent>
      </Panel>

      <Panel>
        <PanelHeader header={t("usefulLinks")} icon="&#xE167;" />
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

export default AboutMe;
