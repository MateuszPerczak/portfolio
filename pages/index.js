import Nav from "../components/nav/nav";
import Content from "../components/content/content";
import Head from "next/head";
import AboutMe from "./aboutMe";
import Skills from "./skills";
import Experience from "./experience";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "../components/footer/footer";

const Index = () => {
  return (
    <>
      <Head>
        <title>Mateusz Perczak - Portfolio</title>
      </Head>
      <Nav />
      <Content>
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Content>
    </>
  );
};

export default Index;
