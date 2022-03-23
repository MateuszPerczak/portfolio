import Page from "../components/page/page";
import Link from "../components/link/link";
import LinkHeader from "../components/link/linkHeader";
import LinkSection from "../components/link/linkSection";

const Contact = () => {
  return (
    <Page header="Kontakt" id="contact">
      <Link href="mailto:mateusz.perczak.mp@gmail.com">
        <LinkHeader header="E-mail" icon="&#xE910;" />
        <LinkSection
          header="Napisz do mnie maila"
          description="mateusz.perczak.mp@gmail.com"
          alllowSection={true}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/mateuszperczak/">
        <LinkHeader header="LinkedIn" icon="&#xE167;" />
        <LinkSection description="Zobacz mój profil LinkedIn." />
      </Link>
      <Link href="https://github.com/MateuszPerczak">
        <LinkHeader header="Github" icon="&#xE167;" />
        <LinkSection description="Zobacz mojego Githuba." />
      </Link>
    </Page>
  );
};

export default Contact;
