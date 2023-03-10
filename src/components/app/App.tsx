import AnimatedOutlet from "@components/animatedOutlet/AnimatedOutlet";
import StyledAnimatedOutlet from "@components/animatedOutlet/AnimatedOutlet.styles";
import Footer from "@components/footer/Footer";
import Loader from "@components/loader/Loader";
import Nav from "@components/nav/Nav";
import { AnimatePresence } from "framer-motion";
import { FC, Suspense } from "react";
import { useLocation } from "react-router-dom";

const App: FC = (): JSX.Element => {
  const location = useLocation();
  return (
    <>
      <Nav />
      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait">
          <StyledAnimatedOutlet
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AnimatedOutlet />
          </StyledAnimatedOutlet>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
