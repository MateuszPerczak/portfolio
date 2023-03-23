import AnimatedOutlet from "@components/animatedOutlet/AnimatedOutlet";
import Footer from "@components/footer/Footer";
import Loader from "@components/loader/Loader";
import Nav from "@components/nav/Nav";
import { FC, Suspense } from "react";
// import { useLocation } from "react-router-dom";

const App: FC = (): JSX.Element => {
  // const location = useLocation();

  // useEffect(() => {
  //   document.getElementById("root")?.scrollTo(0, 0);
  // }, [location.pathname]);

  return (
    <>
      <Nav />
      <Suspense fallback={<Loader />}>
        <AnimatedOutlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
