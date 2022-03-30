import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PageLoading from "../components/page/pageLoading";
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
      <PageLoading />
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "aboutMe",
        "skills",
        "experience",
        "projects",
        "contact",
        "project",
      ])),
    },
  };
}

export default Index;
