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
