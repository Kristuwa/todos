import { FC } from "react";
import { Todo } from "../../types/types";
import { Item, ChooseTodo, TodoText } from "./TodoItem.styled";

interface TodoItemProps {
  task: Todo;
  handleIsDone: (id: string) => void;
}

export const TodoItem: FC<TodoItemProps> = ({ task, handleIsDone }) => {
  const { id, todo, isDone } = task;

  return (
    <Item>
      <ChooseTodo
        type="checkbox"
        data-testid="checkbox"
        checked={isDone}
        onChange={() => handleIsDone(id)}
      />
      <TodoText
        style={{
          textDecoration: isDone ? "line-through" : "none",
          color: isDone ? "#a1a1a1" : "#212121",
        }}
      >
        {todo}
      </TodoText>
    </Item>
  );
};
