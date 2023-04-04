import AnimatedHeader from "@components/animatedHeader/AnimatedHeader";
import Page from "@components/page/Page";
import { ReactComponent as Github } from "@icons/github.svg";
import { ReactComponent as LinkedIn } from "@icons/linkedin.svg";

const Home = (): JSX.Element => {
  return (
    <Page>
      <AnimatedHeader title={["Hi, i am Mateusz", "a Web Developer"]} />
      {/* <PageCard flexDirection="column">
        <Header>Hi 👋, I am Mateusz. I am a self-taught Web & Desktop Developer.</Header>
        <LinksPanel
          title="You can reach me via:"
          links={[
            {
              icon: Github,
              title: "My Github",
              url: "https://github.com/MateuszPerczak",
            },
            {
              icon: LinkedIn,
              title: "My Linkedin",
              url: "https://www.linkedin.com/in/mateuszperczak/",
            },
          ]}
        />
      </PageCard>
      <PageCard alignItems="center">
        <TextWrapper gap={5}>
          <span className="title">About me</span>
          <span className="description bold">
            I&apos;m a software developer from Poland. I&apos;ve been programming since
            2014. I have a passion for creating web applications/desktop apps that are
            useful, easy to use, and beautiful.
          </span>
          <span className="description">
            I&apos;m always looking forward to improving my skills.
          </span>
        </TextWrapper>
      </PageCard>
      <PageCard alignItems="center">
        <TextWrapper gap={5}>
          <span className="title">My skills</span>
          <span className="description bold">This a test card</span>
          <span className="description">☠️</span>
        </TextWrapper>
      </PageCard> */}
    </Page>
  );
};

export default Home;
