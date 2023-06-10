import { FC } from "react";
import { ButtonItem } from "../ButtonItem/ButtonItem";
import { ButtonsList } from "./ListButtons.styled";

interface ListButtonsProps {
  buttonChoose: string;
  handleChooseFilter: (button: string) => void;
}

const buttons: string[] = ["All", "Active", "Completed"];

export const ListButtons: FC<ListButtonsProps> = ({
  buttonChoose,
  handleChooseFilter,
}) => {
  return (
    <ButtonsList>
      {buttons.map((button) => (
        <ButtonItem
          button={button}
          key={button}
          buttonChoose={buttonChoose}
          handleChooseFilter={handleChooseFilter}
        />
      ))}
    </ButtonsList>
  );
};
