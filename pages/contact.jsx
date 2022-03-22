import Page from "../components/page/page";
import Link from "../components/link/link";

const Contact = () => {
  return (
    <Page header="Kontakt" id="contact">
      <Link
        header="E-mail"
        description="Napisz do mnie maila."
        alt="mateusz.perczak.mp@gmail.com"
        href="mailto:mateusz.perczak.mp@gmail.com"
      />

      <Link
        header="LinkedIn"
        description="Zobacz mój profil LinkedIn!"
        href="https://www.linkedin.com/in/mateuszperczak/"
      />
      <Link
        header="Github"
        description="Zobacz mojego githuba!"
        href="https://www.github.com/losek1"
      />
    </Page>
  );
};

export default Contact;
