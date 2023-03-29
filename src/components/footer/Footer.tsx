import type { FC } from "react";
import { memo } from "react";

import StyledFooter from "./Footer.styles";

const Footer: FC = (): JSX.Element => {
  const smallText = ["v7.0.0", "GPL-3.0", "2022 - 2023", "© Mateusz Perczak"];
  return (
    <StyledFooter>
      <p className="footer-wrapper">
        <span className="title">Portfolio</span>
        <span className="text-wrapper">
          {smallText.map((text, index, textArray) => (
            <>
              <span key={`small-text-${index}`}>{text}</span>
              {textArray.at(-1) !== text && (
                <span key={`small-text-seperator${index}`}>|</span>
              )}
            </>
          ))}
        </span>
      </p>
    </StyledFooter>
  );
};

export default memo(Footer);
