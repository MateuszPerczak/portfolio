import type { FC, PropsWithChildren } from "react";

import { transition } from "./Page.animations";
import StyledPage from "./Page.styles";

const Page: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <StyledPage variants={transition} initial="initial" animate="animate" exit="exit">
      {children}
    </StyledPage>
  );
};

export default Page;
