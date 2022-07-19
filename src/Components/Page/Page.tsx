import { FC, PropsWithChildren } from "react";
import { StyledPage, StyledHeader, StyledChildren } from "./Page.style";

type PageProps = PropsWithChildren<{
  header: string;
  wrap?: boolean;
}>;

const Page: FC<PageProps> = ({ children, header }: PageProps): JSX.Element => {
  return (
    <StyledPage>
      <StyledHeader>{header}</StyledHeader>
      <StyledChildren
        initial={{ opacity: 0, transform: "translateY(100px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ type: "spring", mass: 0.5, stiffness: 200, damping: 15 }}
        layoutScroll
      >
        {children}
      </StyledChildren>
    </StyledPage>
  );
};

export default Page;
