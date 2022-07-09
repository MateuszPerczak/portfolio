import { FC } from "react";
import { StyledComboboxLang } from "./ComboboxLang.style";
import { CircleFlag } from "react-circle-flags";

type ComboboxLangProps = {
  header: string;
  flag: string;
  onClick: () => {};
};

const ComboboxLang: FC<ComboboxLangProps> = ({ header, flag, onClick }) => {
  return (
    <StyledComboboxLang onClick={onClick}>
      <span>{header}</span>
      <CircleFlag height="16" countryCode={flag} />
    </StyledComboboxLang>
  );
};

export default ComboboxLang;
