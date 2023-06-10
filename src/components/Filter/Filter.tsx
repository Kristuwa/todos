import { FC } from "react";
import {
  BottomPanel,
  BottomText,
  ButtonFilter,
  ButtonsList,
} from "./Filter.styled";

const buttons: string[] = ["All", "Active", "Completed"];

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
      <ButtonsList>
        {buttons.map((button) => (
          <li key={button}>
            <ButtonFilter
              type="button"
              className={button === buttonChoose ? "active" : "non-active"}
              onClick={() => handleChooseFilter(button)}
            >
              {button}
            </ButtonFilter>
          </li>
        ))}
      </ButtonsList>
      <ButtonFilter type="button" onClick={handleClearCompleted}>
        Clear completed
      </ButtonFilter>
    </BottomPanel>
  );
};
