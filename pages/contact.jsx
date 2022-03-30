import { useTranslation } from "next-i18next";
import Page from "../components/page/page";
import Link from "../components/link/link";
import LinkHeader from "../components/link/linkHeader";
import LinkSection from "../components/link/linkSection";

const Contact = () => {
  // translation
  const { t } = useTranslation("contact");

  return (
    <Page header={t("contact")} id="contact">
      <Link href="mailto:mateusz.perczak.mp@gmail.com">
        <LinkHeader header="E-mail" icon="&#xE910;" />
        <LinkSection
          header={t("email")}
          description="mateusz.perczak.mp@gmail.com"
          alllowSection={true}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/mateuszperczak/">
        <LinkHeader header="LinkedIn" icon="&#xE167;" />
        <LinkSection description={t("linkedIn")} />
      </Link>
      <Link href="https://github.com/MateuszPerczak">
        <LinkHeader header="Github" icon="&#xE167;" />
        <LinkSection description={t("github")} />
      </Link>
    </Page>
  );
};

export default Contact;
