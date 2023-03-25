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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <StaticOutlet />
      </OutletWrapper>
    </AnimatePresence>
  );
};

export default AnimatedOutlet;
