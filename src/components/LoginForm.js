import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validate = (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Requred";
    }
    return errors;
  };

  const onSubmit = (values) => {
    console.log("--", values);
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required!!!"),
    email: Yup.string().email("Invalid format").required("Required!!!"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log("Visited fieldds", formik.touched);
  //console.log(formik.values);

  return (
    <div>
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            {formik.errors.email && formik.touched.email ? (
              <div>{formik.errors.email}</div>
            ) : (
              <></>
            )}
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="mb-2"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            {formik.errors.password && formik.touched.password ? (
              <div>{formik.errors.password}</div>
            ) : (
              <></>
            )}
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default LoginForm;
