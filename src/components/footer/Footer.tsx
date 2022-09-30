import type { FC } from "react";
import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import StyledFooter, { FooterContent, FooterCopyright } from "./Footer.styles";
import NextButton from "@components/nextButton/NextButton";
import type { FooterProps } from "./Footer.types";

const Footer: FC<FooterProps> = ({ path }: FooterProps): JSX.Element => {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterCopyright>
          <FontAwesomeIcon icon={faCopyright} />
          <span>2022 By Mateusz Perczak</span>
        </FooterCopyright>
        <NextButton
          to="/portfolio"
          text="About this site"
          aria-label="About this site"
          disabled={path === "/portfolio"}
        />
      </FooterContent>
    </StyledFooter>
  );
};

export default memo(Footer);
