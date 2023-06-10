import { FC } from "react";
import * as React from "react";
import { Formik, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FormValues } from "../../types/types";
import { FormContainer, FieldContainer, ButtonSubmit } from "./Form.styled";

const validationSchema = Yup.object().shape({
  todo: Yup.string().required("Todo is required"),
});

interface FormProps {
  handleSubmit: (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => void;
}

export const FormTodo: FC<FormProps> = ({ handleSubmit }) => {
  const initialValues: FormValues = { todo: "" };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormContainer>
        <FieldContainer
          id="todo"
          name="todo"
          placeholder="What needs to be done?"
        />
        <ErrorMessage name="todo" />
        <ButtonSubmit type="submit">Submit</ButtonSubmit>
      </FormContainer>
    </Formik>
  );
};
