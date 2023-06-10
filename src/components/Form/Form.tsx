import { FC } from "react";
import * as React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FormValues } from "../../types/types";

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
      <Form>
        <Field id="todo" name="todo" placeholder="What needs to be done?" />
        <ErrorMessage name="todo" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
