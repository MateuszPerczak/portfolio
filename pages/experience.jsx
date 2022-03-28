import Page from "../components/page/page";
import Card from "../components/card/card";
import CardWork from "../components/card/cardWork";

const Experience = () => {
  return (
    <Page header="Doświadczenie" id="experience">
      <Card header="Informatyk" icon="&#xF427;">
        <CardWork
          description="Staż w Urzędzie Gminy Świerklany"
          from="05.2020 r."
          to="05.2020 r."
        />
      </Card>
      <Card header="Pracownik biurowy" icon="&#xF427;">
        <CardWork
          description="Staż w firmie DIGGER Izabela Grębowiec"
          from="05.2021 r."
          to="10.2021 r."
        />
      </Card>
      <Card header="Pracownik produkcyjny" icon="&#xF427;">
        <CardWork
          description="Magorex sp. z o.o. sp. k."
          from="11.2021 r."
          to="02.2022 r."
        />
      </Card>
    </Page>
  );
};

export default Experience;
