import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  // const validate = (values) => {
  //   let errors = {};

  //   if (!values.email) {
  //     errors.email = "Required";
  //   }
  //   if (!values.password) {
  //     errors.password = "Requred";
  //   }
  //   return errors;
  // };

  const onSubmit = (values) => {
    console.log("--", values);
  };
  const validationSchema = Yup.object({
    password: Yup.string().required("Required!!!"),
    email: Yup.string().email("Invalid format").required("Required!!!"),
  });

  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema,
  // });

  // console.log("Visited fieldds", formik.touched);
  //console.log(formik.values);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
            />
            <ErrorMessage name="email" />
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessage name="password" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
