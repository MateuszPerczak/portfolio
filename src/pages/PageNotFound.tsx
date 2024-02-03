import NotFoundMessage from "@components/notFoundMessage/NotFoundMessage";
import Page from "@components/page/Page";

const PageNotFound = (): JSX.Element => {
  return (
    <Page>
      <div
        style={{
          flex: 1,
          display: "grid",
          placeItems: "center",
        }}
      >
        <NotFoundMessage />
      </div>
    </Page>
  );
};

export default PageNotFound;
