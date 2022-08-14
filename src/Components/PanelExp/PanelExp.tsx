import { FC } from "react";
import { StyledPanelExp, StyledPanelExpDate } from "./PanelExp.style";

type PanelExpProps = {
  description: string;
  date: string;
};

const PanelExp: FC<PanelExpProps> = ({
  description,
  date,
}: PanelExpProps): JSX.Element => {
  return (
    <StyledPanelExp>
      <span>{description}</span>
      <StyledPanelExpDate>{date}</StyledPanelExpDate>
    </StyledPanelExp>
  );
};

export default PanelExp;
