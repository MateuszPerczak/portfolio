import { FC, PropsWithChildren } from "react";
import { StyledPage, StyledHeader, StyledChildren } from "./Page.style";
import { useSpring } from "react-spring";

type PageProps = PropsWithChildren<{
  header: string;
  wrap?: boolean;
}>;

const Page: FC<PageProps> = ({ children, header }: PageProps): JSX.Element => {
  const animatedPage = useSpring({
    from: {
      transform: "translateY(50%)",
      opacity: 0,
    },
    to: {
      transform: "translateY(0px)",
      opacity: 1,
    },
    config: {
      tension: 300,
      mass: 0.5,
    },
  });

  return (
    <StyledPage>
      <StyledHeader>{header}</StyledHeader>
      <StyledChildren style={animatedPage}>{children}</StyledChildren>
    </StyledPage>
  );
};

export default Page;
