import { AnimatePresence } from "framer-motion";
import type { FC } from "react";
import { useLocation } from "react-router-dom";

import { OutletWrapper, StaticOutlet } from "./components";

const AnimatedOutlet: FC = (): JSX.Element => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <OutletWrapper
        key={location.pathname}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <StaticOutlet />
      </OutletWrapper>
    </AnimatePresence>
  );
};

export default AnimatedOutlet;
