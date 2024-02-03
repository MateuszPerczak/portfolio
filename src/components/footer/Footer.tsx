import { memo } from "react";
import { Fragment } from "react";

import StyledFooter from "./Footer.styles";

const Footer = (): JSX.Element => {
  const smallText = ["v7.0.0", "GPL-3.0", "2022 - 2024", "© Mateusz Perczak"];
  return (
    <StyledFooter>
      <p className="footer-wrapper">
        <a
          className="title-link"
          href="https://github.com/MateuszPerczak/portfolio"
          rel="noopener noreferrer"
          target="_blank"
        >
          Portfolio
        </a>
        <span className="text-wrapper">
          {smallText.map((text, index, textArray) => (
            <Fragment key={`footer-text-${index}`}>
              <span>{text}</span>
              {textArray.at(-1) !== text && <span>|</span>}
            </Fragment>
          ))}
        </span>
      </p>
    </StyledFooter>
  );
};

export default memo(Footer);
