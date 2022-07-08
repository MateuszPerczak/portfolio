import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import Page from "../Components/Page/Page";

const Preferences: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Page header={t("preferences")}>
      <span>preferences</span>
    </Page>
  );
};
export default memo(Preferences);
