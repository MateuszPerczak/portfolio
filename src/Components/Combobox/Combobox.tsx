import { FC, PropsWithChildren, useState } from "react";
import { StyledCombobox, ComboboxList } from "./Combobox.style";
import Icon from "../Icon/Icon";

type ComboboxProps = PropsWithChildren<{
  header: string;
}>;

const Combobox: FC<ComboboxProps> = ({ header, children }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledCombobox onClick={() => setIsOpen(!isOpen)}>
      <span>{header}</span>
      <Icon>{isOpen ? "\uE014" : "\uE015"}</Icon>
      <ComboboxList
        animate={{
          height: isOpen
            ? `${Array.isArray(children) ? children.length * 110 : 110}%`
            : "0%",
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          type: "spring",
          mass: 0.2,
          stiffness: 200,
        }}
        onMouseLeave={() => setIsOpen(false)}
      >
        {isOpen && children}
      </ComboboxList>
    </StyledCombobox>
  );
};

export default Combobox;
