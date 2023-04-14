import AnimatedHeader from "@components/animatedHeader/AnimatedHeader";
import AnimatedQuote from "@components/animatedQuote/AnimatedQuote";
import Page from "@components/page/Page";
import { ReactComponent as Github } from "@icons/github.svg";
import { ReactComponent as LinkedIn } from "@icons/linkedin.svg";

const Home = (): JSX.Element => {
  return (
    <Page>
      <AnimatedHeader
        title={["Hi, i am Mateusz", "a Web Developer"]}
        description="I'am also a desktop dev 😊"
      />

      <AnimatedQuote quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />

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
