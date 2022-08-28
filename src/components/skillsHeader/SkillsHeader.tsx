import type { FC } from "react";
import Header from "@components/header/Header";
import StyledSkillsHeader from "./SkillsHeader.styles";
import { animatedSkillsHeader } from "@animations/skills";

const SkillsHeader: FC = (): JSX.Element => {
  return (
    <StyledSkillsHeader>
      <Header variants={animatedSkillsHeader}>My knowleage</Header>
    </StyledSkillsHeader>
  );
};

export default SkillsHeader;
