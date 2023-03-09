import type { FC, PropsWithChildren } from "react";

import StyledPage from "./Page.styles";

const Page: FC<PropsWithChildren> = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <StyledPage
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </StyledPage>
  );
};
 
export default Page;
