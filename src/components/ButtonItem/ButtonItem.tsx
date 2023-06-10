import { FC } from "react";
import { ButtonFilter } from "./ButtonItem.styled";

interface ButtonItemProps {
  button: string;
  buttonChoose: string;
  handleChooseFilter: (button: string) => void;
}

export const ButtonItem: FC<ButtonItemProps> = ({
  button,
  buttonChoose,
  handleChooseFilter,
}) => {
  return (
    <li>
      <ButtonFilter
        type="button"
        className={button === buttonChoose ? "active" : "non-active"}
        onClick={() => handleChooseFilter(button)}
      >
        {button}
      </ButtonFilter>
    </li>
  );
};
