import React, { useState, useMemo, FC, useCallback } from "react";
import { theme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import "./App.css";
import { FormTodo } from "./components/Form/Form";
import { TodoList } from "./components/TodoList/TodoList";
import { FormValues, Todo } from "./types/types";
import { FormikHelpers } from "formik";
import { Filter } from "./components/Filter/Filter";
import { Title, MainContainer, TextContainer } from "./App.styled";

const App: FC = () => {
  const [todosList, setTodosList] = useState<Todo[]>([]);
  const [buttonChoose, setButtonChoose] = useState<string>("All");

  const handleSubmit = useCallback(
    (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        todo: values.todo,
        isDone: false,
      };
      setTodosList((prevState: Todo[]) => [...prevState, newTodo]);
      formikHelpers.resetForm();
    },
    []
  );

  const handleIsDone = useCallback((id: string) => {
    setTodosList((prevState: Todo[]) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }, []);

  const handleChooseFilter = useCallback((button: string) => {
    setButtonChoose(button);
  }, []);

  const handleClearCompleted = useCallback(() => {
    setTodosList((prevState) =>
      prevState.filter((todo) => todo.isDone === false)
    );
  }, []);

  const visibleList = useMemo(() => {
    if (buttonChoose === "All") {
      return todosList;
    } else if (buttonChoose === "Active") {
      return todosList.filter((todo) => !todo.isDone);
    }
    return todosList.filter((todo) => todo.isDone);
  }, [todosList, buttonChoose]);

  const itemsActive = useMemo(
    () => todosList.filter((todo) => !todo.isDone).length,
    [todosList]
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Title>todos</Title>
        <MainContainer>
          <FormTodo handleSubmit={handleSubmit} />
          {todosList.length === 0 && (
            <TextContainer>
              <p>You haven't any task</p>
            </TextContainer>
          )}
          {todosList.length > 0 && (
            <TodoList list={visibleList} handleIsDone={handleIsDone} />
          )}
          <Filter
            handleChooseFilter={handleChooseFilter}
            buttonChoose={buttonChoose}
            handleClearCompleted={handleClearCompleted}
            itemsActive={itemsActive}
          />
        </MainContainer>
      </main>
    </ThemeProvider>
  );
};

export default App;
