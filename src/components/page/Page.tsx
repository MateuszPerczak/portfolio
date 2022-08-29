import { animatedPage } from "@animations/page";
import type { FC, PropsWithChildren } from "react";
import StyledPage from "./Page.styles";

const Page: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <StyledPage
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: "all" }}
      variants={animatedPage}
    >
      {children}
    </StyledPage>
  );
};

export default Page;
