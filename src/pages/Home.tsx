import AnimatedHeader from "@components/animatedHeader/AnimatedHeader";
import AnimatedProjects from "@components/animatedProjects/AnimatedProjects";
import Page from "@components/page/Page";
import { ReactComponent as Github } from "@icons/github.svg";
import { ReactComponent as LinkedIn } from "@icons/linkedin.svg";

const Home = (): JSX.Element => {
  return (
    <Page>
      <AnimatedHeader title={["Hi, i am Mateusz", "a Web Developer"]} />
      <AnimatedProjects />
    </Page>
    // <Page>
    //   <AnimatedHeader title={["Hi, i am Mateusz", "a Web Developer"]} />
    //   <AnimatedProjects />

    //   {/* <Project>
    //     <span className="projects-header">A small selection of my work</span>
    //     <div className="projects-wrapper">
    //       <div className="project"></div>
    //       <div className="project"></div>
    //       <div className="project"></div>
    //       <div className="project"></div>
    //     </div>
    //   </Project> */}
    // </Page>
  );
};

export default Home;
