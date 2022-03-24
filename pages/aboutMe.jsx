import Page from "../components/page/page";
import Info from "../components/info/info";
import InfoImg from "../components/info/infoImg";
import InfoText from "../components/info/infoText";

const AboutMe = () => {
  return (
    <Page header="O Mnie" id="about-me">
      <Info>
        <InfoImg
          src="https://avatars.githubusercontent.com/u/40388335?v=4"
          alt="avatar"
        />
        <InfoText
          header="Kim jestem?"
          description="Hejka, nazywam się Mateusz, mam 20 lat i uwielbiam programować. Moja przygoda z programowaniem zaczęła się w roku 2015, gdy zaczynałem pisać pierwsze skrypty w cmd. W 2018 r. rozpoczołem przygodę z Python'em głównie pisząc aplikacje desktopowe. Aktualnie tworzę strony oraz aplikacje webowe z wykorzystaniem popularnych frameworków."
        />
      </Info>
    </Page>
  );
};

export default AboutMe;
