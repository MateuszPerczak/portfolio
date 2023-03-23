import type { FC } from "react";

import StyledLinks, { StyledLink } from "./LinksPanel.styles";
import type { LinksPanelProps } from "./LinksPanel.types";

const LinksPanel: FC<LinksPanelProps> = ({ title, links }): JSX.Element => {
  return (
    <StyledLinks>
      {title && <span className="links-header">{title}</span>}
      <div className="links-wrapper">
        {links.map(({ icon: Icon, title, url }, index) => (
          <StyledLink
            key={`link-${index}`}
            href={url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon />
            {title}
          </StyledLink>
        ))}
      </div>
    </StyledLinks>
  );
};

export default LinksPanel;
