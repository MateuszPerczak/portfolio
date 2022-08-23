import type { FC, PropsWithChildren } from "react";
import StyledPage from "./Page.styles";

const Page: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <StyledPage initial="offscreen" whileInView="onscreen" viewport={{ amount: "all" }}>
      {children}
    </StyledPage>
  );
};

export default Page;
