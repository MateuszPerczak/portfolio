import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import { transition } from "./AnimatedOutlet.animations";
import { OutletWrapper, StaticOutlet } from "./components";

const AnimatedOutlet = (): JSX.Element => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <OutletWrapper
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={transition}
      >
        <StaticOutlet />
      </OutletWrapper>
    </AnimatePresence>
  );
};

export default AnimatedOutlet;
