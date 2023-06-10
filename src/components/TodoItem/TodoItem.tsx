import { FC } from "react";
import { Todo } from "../../types/types";

interface TodoItemProps {
  task: Todo;
}

export const TodoItem: FC<TodoItemProps> = ({ task }) => {
  const { todo, isDone } = task;

  return (
    <li>
      <div data-done={isDone}></div>
      <p>{todo}</p>
    </li>
  );
};
