import styled from "styled-components";
import { Theme } from "../../types/types";

export const Item = styled.li`
  display: flex;
  gap: 20px;
  border: 1px solid #a1a1a1;
  padding: 10px;
`;

export const ChooseTodo = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  border: 1px solid #a1a1a1;
  border-radius: 15px;
  background-color: transparent;

  transition: border-color 500ms linear;

  &:hover,
  &:focus {
    border-color: ${(p: { theme: Theme }) => p.theme.color.accentColor};
  }
`;

export const TodoText = styled.p`
  font-size: 20px;
`;
