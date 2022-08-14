import type { FC } from "react";
import { useMemo } from "react";
import StyledFooter from "./Footer.style";

const Footer: FC = (): JSX.Element => {
  const year = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <StyledFooter>
      <span>Mateusz Perczak &copy; {year}</span>
    </StyledFooter>
  );
};

export default Footer;
