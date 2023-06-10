import { FC } from "react";
import { BottomPanel, BottomText } from "./Filter.styled";
import { ButtonFilter } from "../ButtonItem/ButtonItem.styled";
import { ListButtons } from "../ListButtons/ListButtons";

interface FilterProps {
  handleChooseFilter: (button: string) => void;
  buttonChoose: string;
  handleClearCompleted: () => void;
  itemsActive: number;
}

export const Filter: FC<FilterProps> = ({
  handleChooseFilter,
  buttonChoose,
  handleClearCompleted,
  itemsActive,
}) => {
  return (
    <BottomPanel>
      <BottomText>{itemsActive} items left</BottomText>
      <ListButtons
        buttonChoose={buttonChoose}
        handleChooseFilter={handleChooseFilter}
      />
      <ButtonFilter type="button" onClick={handleClearCompleted}>
        Clear completed
      </ButtonFilter>
    </BottomPanel>
  );
};
