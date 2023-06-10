import { FC } from "react";
import { Todo } from "../../types/types";
import { TodoItem } from "../TodoItem/TodoItem";

interface TodoListProps {
  list: Todo[];
}

export const TodoList: FC<TodoListProps> = ({ list }) => {
  return (
    <ul>
      {list.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
};
