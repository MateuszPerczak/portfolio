import type { FC } from "react";
import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import StyledFooter, { FooterContent, FooterCopyright } from "./Footer.styles";
import NextButton from "@components/nextButton/NextButton";

const Footer: FC = (): JSX.Element => {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterCopyright>
          <FontAwesomeIcon icon={faCopyright} />
          <span>Mateusz Perczak 2022</span>
        </FooterCopyright>

        <NextButton to="/portfolio" text="About this site" aria-label="About this site" />
      </FooterContent>
    </StyledFooter>
  );
};

export default memo(Footer);
