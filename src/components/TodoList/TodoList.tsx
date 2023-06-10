import { FC } from "react";
import { Todo } from "../../types/types";
import { TodoItem } from "../TodoItem/TodoItem";

interface TodoListProps {
  list: Todo[];
  handleIsDone: (id: string) => void;
}

export const TodoList: FC<TodoListProps> = ({ list, handleIsDone }) => {
  return (
    <ul>
      {list.map((task) => (
        <TodoItem key={task.id} task={task} handleIsDone={handleIsDone} />
      ))}
    </ul>
  );
};
