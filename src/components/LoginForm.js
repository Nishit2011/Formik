import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = (props) => {
  const initialValues = {
    email: "",
    password: "",
    address: "",
    country: "",
    city: {
      pincode: "",
      state: "",
    },
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
    address: Yup.string().required("Req!!!"),
    country: Yup.string().required("Req!!!!"),
    pincode: Yup.string().required("Pin req!!1"),
    state: Yup.string().required("State required!!!!!"),
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

          <div className="form-control">
            <label htmlFor="address">Address</label>
            <Field
              as="textarea"
              id="address"
              name="address"
              placeholder="Enter address"
            />
            <ErrorMessage name="address" />
          </div>

          <div className="form-control">
            <label htmlFor="pincode"></label>
            <Field
              id="pincode"
              name="city.pincode"
              id="pincode"
              placeholder="Enter Pincode"
            ></Field>
          </div>

          <div className="form-control">
            <label htmlFor="state"></label>
            <Field
              id="state"
              name="city.state"
              id="state"
              placeholder="Enter state"
            ></Field>
          </div>

          <div className="form-control">
            <label htmlFor="country">Country</label>
            <Field name="country">
              {(props) => {
                console.log(props);
                const { field, form, meta } = props;
                return <input id="country" {...field} />;
              }}
            </Field>

            <ErrorMessage name="country" />
          </div>

          <div className="form-control">
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
