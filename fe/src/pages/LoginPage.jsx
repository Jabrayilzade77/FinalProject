import { useNavigate } from "react-router-dom";
import "../pages/Register.scss";
import { Helmet } from "react-helmet";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const LoginPage = () => {
  const { setdecoded, settoken } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* <div className="register-container">
        <form onSubmit={handleSubmit} className="register-form">
          <h2>Login</h2>
        </form>
      </div> */}

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
            fetch("http://localhost:3000/login", {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify(values),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                const tokenDecoded = jwtDecode(data.token);

                console.log(tokenDecoded);
                Cookies.set("token", data.token, { expires: 1 });
                settoken(data.token);
                setdecoded(tokenDecoded);
                navigate("/");
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
              <Field name="password" type="password" />
              <ErrorMessage name="password" />
            </div>

          
            
            <button type="submit" className="register-button">
              Submit
            </button>
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default LoginPage;
