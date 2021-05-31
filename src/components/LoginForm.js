import React from "react";

import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
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
    phNum: ["", ""],
    phoneNumbers: [""],
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
    pincode: Yup.string().required("Pin req!!"),
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
              placeholder="Enter Pincode"
            ></Field>
          </div>
          <ErrorMessage name="city.pincode" />
          <div className="form-control">
            <label htmlFor="state"></label>
            <Field
              id="state"
              name="city.state"
              placeholder="Enter state"
            ></Field>
            <ErrorMessage name="city.state" />
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
            <label htmlFor="primary-phn"></label>
            <Field
              name="phNum[0]"
              type="text"
              placeholder="Enter primary phone"
            ></Field>

            <ErrorMessage name="phNum[0]" />
          </div>

          <div className="form-control">
            <label htmlFor="secondary-phn"></label>
            <Field
              name="phNum[1]"
              type="text"
              placeholder="Enter secondary phone"
            ></Field>

            <ErrorMessage name="phNum[1]" />
          </div>
          <div className="form-control">
            <label htmlFor="list-of-phnNumbers"></label>
            <FieldArray name="phoneNumbers">
              {(fieldArrayProps) => {
                // console.log(fieldArrayProps);
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                const { phoneNumbers } = values;
                return (
                  <div>
                    {phoneNumbers.map((phoneNumber, index) => (
                      <div key={index}>
                        <Field name={`phoneNumber[${index}]`} />
                        <button type="button" onClick={() => remove(index)}>
                          -
                        </button>
                        <button type="button" onClick={() => push("")}>
                          +
                        </button>
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>
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
