import { FC } from "react";
import { Todo } from "../../types/types";
import { AiOutlineCheck } from "react-icons/ai";
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
        type="button"
        onClick={() => handleIsDone(id)}
        aria-label="is done"
      >
        {isDone && <AiOutlineCheck size={18} color="green" />}
      </ChooseTodo>
      <TodoText
        style={{
          textDecoration: isDone ? "line-through" : "#212121",
          color: isDone ? "#a1a1a1" : "none",
        }}
      >
        {todo}
      </TodoText>
    </Item>
  );
};
