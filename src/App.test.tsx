import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { FormTodo } from "./components/Form/Form";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./utils/theme";
import userEvent from "@testing-library/user-event";
import { TodoItem } from "./components/TodoItem/TodoItem";

describe("TEST APP", () => {
  jest.setTimeout(30000);
  test("renders App component", () => {
    render(<App />);
    const linkElement = screen.getByText(/todos/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("adds a new task when form is submitted", async () => {
    const handleSubmit = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <FormTodo handleSubmit={handleSubmit} />
      </ThemeProvider>
    );
    await userEvent.type(
      screen.getByPlaceholderText("What needs to be done?"),
      "New Task"
    );

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });

  test("marks a task as done when clicked", () => {
    const task = {
      id: "1",
      todo: "Task 1",
      isDone: false,
    };

    const handleIsDone = jest.fn();
    render(<TodoItem task={task} handleIsDone={handleIsDone} />);
    const checkbox = screen.getByTestId("checkbox");
    userEvent.click(checkbox);

    expect(handleIsDone).toHaveBeenCalledWith("1");
  });
});
