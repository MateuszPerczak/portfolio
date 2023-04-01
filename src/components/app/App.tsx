import AnimatedOutlet from "@components/animatedOutlet/AnimatedOutlet";
import Footer from "@components/footer/Footer";
import Loader from "@components/loader/Loader";
import Nav from "@components/nav/Nav";
import { Suspense } from "react";
import { ScrollRestoration } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <>
      <ScrollRestoration
        getKey={(location): string => {
          return location.pathname;
        }}
      />
      <Nav />
      <Suspense fallback={<Loader />}>
        <AnimatedOutlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
