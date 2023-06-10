import styled from "styled-components";
import { Theme } from "../../types/types";

export const BottomPanel = styled.li`
  display: flex;
  justify-content: space-between;
  border: 1px solid #a1a1a1;
  padding: 10px;
`;

export const BottomText = styled.p`
  font-size: 16px;
  color: ${(p: { theme: Theme }) => p.theme.color.thirdColor};
`;

export const ButtonsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

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
