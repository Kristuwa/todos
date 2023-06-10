import React, { useState } from "react";
import "./App.css";
import { theme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { FormTodo } from "./components/Form/Form";
import { TodoList } from "./components/TodoList/TodoList";
import { FormValues, Todo } from "./types/types";
import { FormikHelpers } from "formik";
import { nanoid } from "nanoid";

const App = () => {
  const [todosList, setTodosList] = useState<Todo[]>([]);

  const handleSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    console.log(values);
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
        <TodoList list={todosList} />
      </main>
    </ThemeProvider>
  );
};

export default App;
