import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../pages/Register.scss";
import { Helmet } from "react-helmet";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
    
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            fetch("http://localhost:3000/register", {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify(values),
            })
              .then((res) => res.json())
              .then(() => {
                navigate("/login");
              })
              .catch(function (res) {
                console.log(res);
              });

            setSubmitting(false);
          }, 400);
        }}
      >
        <div className="register-container">
          <Form className="register-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field name="password" type="text" />
              <ErrorMessage name="password" />
            </div>

       
            <button type="submit" className="register-button">
              Submit
            </button>

            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default Register;
