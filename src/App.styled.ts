import styled from "styled-components";
import { Theme } from "./types/types";

export const Title = styled.h1`
  font-weight: 400;
  font-size: 60px;
  text-align: center;
  color: ${(p: { theme: Theme }) => p.theme.color.primaryColor};
  margin-bottom: 20px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 600px;
  margin-left: auto;
  margin-right: auto;

  border: 3px solid #a1a1a1;
  background-color: ${(p: { theme: Theme }) => p.theme.color.bgSecondary};
  box-shadow: 6px 6px #989898, 12px 12px #6c6666;
`;

export const TextContainer = styled.div`
  padding: 20px;
  text-align: center;
`;
