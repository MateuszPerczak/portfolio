import NotFoundMessage from "@components/notFoundMessage/NotFoundMessage";
import Page from "@components/page/Page";
import StackPanel from "@components/stackPanel/StackPanel";

const PageNotFound = (): JSX.Element => {
  return (
    <Page>
      <StackPanel display="grid" placeItems="center" flex="1">
        <NotFoundMessage />
      </StackPanel>
    </Page>
  );
};

export default PageNotFound;
