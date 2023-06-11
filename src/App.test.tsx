import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { FormTodo } from "./components/Form/Form";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./utils/theme";

test("renders App component", () => {
  render(<App />);
  const linkElement = screen.getByText(/todos/i);
  expect(linkElement).toBeInTheDocument();
});

test("adds a new task when form is submitted", () => {
  const handleSubmit = jest.fn();
  render(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FormTodo handleSubmit={handleSubmit} />
    </ThemeProvider>
  );
  const input = screen.getByPlaceholderText(
    "What needs to be done?"
  ) as HTMLInputElement;
  fireEvent.change(input, { target: { value: "New task" } });

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith(
    { todo: "New task" },
    expect.any(Object)
  );
});
