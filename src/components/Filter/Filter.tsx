import { FC } from "react";

const buttons: string[] = ["All", "Active", "Completed"];

interface FilterProps {
  handleChooseFilter: (button: string) => void;
  buttonChoose: string;
  handleClearCompleted: () => void;
}

export const Filter: FC<FilterProps> = ({
  handleChooseFilter,
  buttonChoose,
  handleClearCompleted,
}) => {
  return (
    <div>
      <p>2 items left</p>
      <ul>
        {buttons.map((button) => (
          <li key={button}>
            <button
              type="button"
              data-active={button === buttonChoose ? "active" : "non-active"}
              onClick={() => handleChooseFilter(button)}
            >
              {button}
            </button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleClearCompleted}>
        Clear completed
      </button>
    </div>
  );
};
