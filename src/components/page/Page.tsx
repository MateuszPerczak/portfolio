import type { FC } from "react";
import StyledPage from "./Page.styles";
import type { PageProps } from "./Page.types";

const Page: FC<PageProps> = ({ children, ...rest }: PageProps): JSX.Element => {
  return (
    <StyledPage
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.6,
      }}
      {...rest}
    >
      {children}
    </StyledPage>
  );
};

export default Page;
