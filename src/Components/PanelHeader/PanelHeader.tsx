import { FC } from "react";
import StyledPanelHeader from "./PanelHeader.style";
import Icon from "../Icon/Icon";

type PanelHeaderProps = {
  header: string;
  icon: string;
};

const PanelHeader: FC<PanelHeaderProps> = ({
  header,
  icon,
}: PanelHeaderProps): JSX.Element => {
  return (
    <StyledPanelHeader>
      <span>{header}</span>
      <Icon>{icon}</Icon>
    </StyledPanelHeader>
  );
};

export default PanelHeader;
