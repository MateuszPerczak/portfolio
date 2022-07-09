import { FC } from "react";
import {
  StyledPanelSkill,
  StyledPanelSkillHeader,
  StyledPanelSkillDescription,
} from "./PanelSkill.style";

type PanelSkillProps = {
  header?: string;
  description: string;
};

const PanelSkill: FC<PanelSkillProps> = ({
  header,
  description,
}: PanelSkillProps): JSX.Element => {
  return (
    <StyledPanelSkill>
      {header ? (
        <StyledPanelSkillHeader>{header}</StyledPanelSkillHeader>
      ) : null}
      <StyledPanelSkillDescription>{description}</StyledPanelSkillDescription>
    </StyledPanelSkill>
  );
};

export default PanelSkill;
