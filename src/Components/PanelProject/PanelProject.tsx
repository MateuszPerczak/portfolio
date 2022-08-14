import { FC } from "react";
import {
  StyledProjectPanel,
  StyledProjectLangs,
  StyledProjectDescription,
} from "./PanelProject.style";
import PanelHeader from "../PanelHeader/PanelHeader";
import PanelContent from "../PanelContent/PanelContent";
import Link from "../Link/Link";
import { TFunction } from "react-i18next";

type PanelProjectProps = {
  header: string;
  description: string;
  links: { href: string; header: string }[];
  langs: string;
  t: TFunction;
};

const PanelProject: FC<PanelProjectProps> = ({
  header,
  links,
  langs,
  description,
  t,
}: PanelProjectProps): JSX.Element => {
  return (
    <StyledProjectPanel>
      <PanelHeader header={header} icon="&#xECAA;" />
      <StyledProjectDescription>{t(description)}</StyledProjectDescription>
      <PanelContent>
        {links.map(({ href, header }, index) => {
          return (
            <Link key={index} href={href}>
              {header}
            </Link>
          );
        })}
      </PanelContent>
      <StyledProjectLangs>{langs}</StyledProjectLangs>
    </StyledProjectPanel>
  );
};

export default PanelProject;
