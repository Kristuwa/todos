import styled from "styled-components";
import { Theme } from "../../types/types";

export const ButtonFilter = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: inherit;
  font-size: 14px;

  color: ${(p: { theme: Theme }) => p.theme.color.thirdColor};
  border: none;
  background-color: transparent;

  transition: color 500ms linear;

  &.active {
    border: 1px solid #a1a1a1;
    border-radius: 5px;
  }

  &:hover,
  &:focus {
    color: ${(p: { theme: Theme }) => p.theme.color.accentColor};
  }
`;
