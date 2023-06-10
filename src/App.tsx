import React, { useState, useMemo } from "react";
import "./App.css";
import { theme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { FormTodo } from "./components/Form/Form";
import { TodoList } from "./components/TodoList/TodoList";
import { FormValues, Todo } from "./types/types";
import { FormikHelpers } from "formik";
import { nanoid } from "nanoid";
import { Filter } from "./components/Filter/Filter";

const App = () => {
  const [todosList, setTodosList] = useState<Todo[]>([]);
  const [buttonChoose, setButtonChoose] = useState<string>("All");

  const handleChooseFilter = (button: string) => {
    setButtonChoose(button);
  };

  const handleClearCompleted = () => {
    setTodosList((prevState) =>
      prevState.filter((todo) => todo.isDone === false)
    );
  };

  const visibleList = useMemo(() => {
    if (buttonChoose === "All") {
      return todosList;
    } else if (buttonChoose === "Active") {
      return todosList.filter((todo) => todo.isDone === false);
    }
    return todosList.filter((todo) => todo.isDone === true);
  }, [todosList, buttonChoose]);

  const handleSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    const newTodo: Todo = { id: nanoid(), todo: values.todo, isDone: false };
    setTodosList((prevState: Todo[]) => [...prevState, newTodo]);
    formikHelpers.resetForm();
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <h1>TODOS</h1>
        <FormTodo handleSubmit={handleSubmit} />
        <TodoList list={visibleList} />
        <Filter
          handleChooseFilter={handleChooseFilter}
          buttonChoose={buttonChoose}
          handleClearCompleted={handleClearCompleted}
        />
      </main>
    </ThemeProvider>
  );
};

export default App;
