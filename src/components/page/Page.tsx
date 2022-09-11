import type { FC, PropsWithChildren } from "react";
import StyledPage from "./Page.styles";

const Page: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <StyledPage
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.6,
      }}
    >
      {children}
    </StyledPage>
  );
};

export default Page;
