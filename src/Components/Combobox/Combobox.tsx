import { FC, PropsWithChildren, useState } from "react";
import { StyledCombobox, ComboboxList } from "./Combobox.style";
import { useSpring } from "react-spring";

import Icon from "../Icon/Icon";

type ComboboxProps = PropsWithChildren<{
  header: string;
}>;

const Combobox: FC<ComboboxProps> = ({ header, children }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const animatedList = useSpring({
    height: isOpen
      ? `${Array.isArray(children) ? children.length * 110 : 0}%`
      : "0%",
    opacity: isOpen ? 1 : 0,
    config: {
      tension: 300,
      mass: 0.5,
      friction: 20,
    },
  });

  return (
    <StyledCombobox onClick={() => setIsOpen(!isOpen)}>
      <span>{header}</span>
      <Icon>{isOpen ? "\uE014" : "\uE015"}</Icon>
      <ComboboxList style={animatedList} onMouseLeave={() => setIsOpen(false)}>
        {isOpen && children}
      </ComboboxList>
    </StyledCombobox>
  );
};

export default Combobox;
