import { useIsPresent } from "framer-motion";
import type { FC, PropsWithChildren } from "react";
import StyledPage, { StyledPageAnimation } from "./Page.styles";

const Page: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const isPresent = useIsPresent();
  return (
    <StyledPage>
      {children}
      <StyledPageAnimation
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { type: "spring", mass: 0.6, stiffness: 100 } }}
        exit={{ scaleX: 1, transition: { type: "spring", mass: 0.6, stiffness: 50 } }}
        style={{ originX: isPresent ? 1 : 0 }}
      />
    </StyledPage>
  );
};

export default Page;
