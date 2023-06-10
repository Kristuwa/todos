import styled from "styled-components";
import { Form, Field } from "formik";
import { Theme } from "../../types/types";

export const FormContainer = styled(Form)`
  border: 1px solid #a1a1a1;
  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FieldContainer = styled(Field)`
  width: 400px;
`;

export const ButtonSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;

  padding: 5px;

  border: 1px solid #a1a1a1;
  border-radius: 5px;
  color: ${(p: { theme: Theme }) => p.theme.color.btnColor};
  background-color: transparent;

  transition: color 500ms linear;

  &:hover,
  &:focus {
    color: ${(p: { theme: Theme }) => p.theme.color.accentColor};
  }
`;
