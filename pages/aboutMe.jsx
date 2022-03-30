import { useTranslation } from "next-i18next";
import Page from "../components/page/page";
import PageVariableView from "../components/page/pageVariableView";
import Card from "../components/card/card";
import CardImg from "../components/card/cardImg";
import CardText from "../components/card/cardText";
import CardList from "../components/card/cardList";

const AboutMe = () => {
  // translation
  const { t } = useTranslation("aboutMe");

  return (
    <Page header={t("aboutMe")} id="about-me">
      <PageVariableView>
        <Card header={t("whoAmI")} icon="&#xE136;" flex={1}>
          <CardImg
            src="https://avatars.githubusercontent.com/u/40388335?v=4"
            alt="avatar"
          />
          <CardText header="Well ..." description={t("aboutMeDescription")} />
        </Card>
        <Card header={t("toDo")} icon="&#xE1DC;" flex={1}>
          <CardList header="Portfolio">
            <li>{t("markdown")}</li>
          </CardList>
          <CardList header={t("apps")}>
            <li>{t("saves")}</li>
            <li>{t("musicplayer")}</li>
          </CardList>
        </Card>
      </PageVariableView>
    </Page>
  );
};

export default AboutMe;
