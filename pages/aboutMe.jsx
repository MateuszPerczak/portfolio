import Page from "../components/page/page";
import Card from "../components/card/card";
import CardImg from "../components/card/cardImg";
import CardText from "../components/card/cardText";
import CardList from "../components/card/cardList";

const AboutMe = () => {
  return (
    <Page header="O Mnie" id="about-me">
      <Card header="Kim jestem?" icon="&#xE136;">
        <CardImg
          src="https://avatars.githubusercontent.com/u/40388335?v=4"
          alt="avatar"
        />
        <CardText
          header="Well ..."
          description="Hejka, nazywam się Mateusz, mam 20 lat i uwielbiam programować. Moja przygoda z programowaniem zaczęła się w roku 2015, gdy zaczynałem pisać pierwsze skrypty w cmd. W 2018 r. rozpocząłem przygodę z Python'em, głównie pisząc aplikacje desktopowe. Aktualnie tworzę strony oraz aplikacje webowe z wykorzystaniem popularnych frameworków."
        />
      </Card>
      <Card header="W planach" icon="&#xE1DC;">
        <CardList header="Portfolio">
          <li>Dodanie framework&apos;u i18next</li>
          <li>Dodanie Markdown</li>
        </CardList>
        <CardList header="Aplikacje">
          <li>Aplikacja do zarządzania save&apos;ami z gier</li>
          <li>Przepisanie odtwarzacza muzycznego do web app</li>
        </CardList>
      </Card>
    </Page>
  );
};

export default AboutMe;
