import AnimatedHeader from "@components/animatedHeader/AnimatedHeader";
import AnimatedText from "@components/animatedText/AnimatedText";
import Page from "@components/page/Page";
import { ReactComponent as Github } from "@icons/github.svg";
import { ReactComponent as LinkedIn } from "@icons/linkedin.svg";

import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Project = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  .projects-wrapper {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 700px;
  }
  .project {
    display: flex;
    flex: 1 0 300px;
    padding: 10px 20px;
    background-color: #212121;
    border-radius: 5px;
    aspect-ratio: 3/2;
    border: 1px solid ${({ theme: { border } }): string => border};
  }
`;

const Home = (): JSX.Element => {
  return (
    <Page>
      <AnimatedHeader
        title={["Hi, i am Mateusz", "a Web Developer"]}
        description="I'm also a desktop dev 😊"
      />
      <Project>
        <div className="projects-wrapper">
          <div className="project">1</div>
          <div className="project">2</div>
          <div className="project">3</div>
          <div className="project">4</div>
          <div className="project">5</div>
          <div className="project">6</div>
          <div className="project">7</div>
          <div className="project">8</div>
        </div>
      </Project>
    </Page>
  );
};

export default Home;
