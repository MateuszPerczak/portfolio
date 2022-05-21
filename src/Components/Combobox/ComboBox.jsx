import { useState } from "react";
import styled from "@emotion/styled";
import Icon from "../Icon/Icon";
import ComboList from "./ComboList";
import ComboItem from "./ComboItem";
import { CircleFlag } from "react-circle-flags";

const StyledComboBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  min-width: 150px;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  background: ${({ theme: { background } }) => {
    return background;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

const ComboBox = ({ itemsSource, placeholderText = "", onSelectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(placeholderText);

  return (
    <StyledComboBox onClick={() => setIsOpen(!isOpen)}>
      <span>{selectedValue}</span>
      <Icon>{isOpen ? "\uE010" : "\uE0E5"}</Icon>
      <ComboList isOpen={isOpen}>
        {Array.isArray(itemsSource)
          ? itemsSource.map((item, index) => {
              return (
                <ComboItem
                  key={index}
                  onClick={() => {
                    setSelectedValue(item.name);
                    onSelectionChange(item.language);
                  }}
                >
                  {item.name}
                  <CircleFlag countryCode={item.flag} height="18" />
                </ComboItem>
              );
            })
          : null}
      </ComboList>
    </StyledComboBox>
  );
};

export default ComboBox;
