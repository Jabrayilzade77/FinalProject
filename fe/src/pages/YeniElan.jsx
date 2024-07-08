import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../pages/YeniElan.scss";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

function YeniElan() {

const navigate = useNavigate()

  const [files, setFiles] = useState({
    image: null,
    detailImages1: [],
    detailImages2: [],
  });
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>New Advertisement</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Formik
        initialValues={{
          admin: "",
          city: "",
          title: "",
          marka: "",
          model: "",
          il: "",
          motor: "",
          km: "",
          desc: "",
          price: "",
          image: "", // <--- Add this
          detailImages1: [], // <--- Add this
          detailImages2: [], // <--- Add this
        }}
        validationSchema={Yup.object({
          admin: Yup.string().required("Required"),
          city: Yup.string().required("Required"),
          title: Yup.string().required("Required"),
          marka: Yup.string().required("Required"),
          model: Yup.string().required("Required"),
          il: Yup.string().required("Required"),
          motor: Yup.string().required("Required"),
          km: Yup.string().required("Required"),
          desc: Yup.string().required("Required"),
          price: Yup.string().required("Required"),
          image: Yup.string().required("Required"),
          detailImages1: Yup.array()
            .min(1, "At least one image required")
            .required("Required"),
          detailImages2: Yup.array()
            .min(1, "At least one image required")
            .required("Required"),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const formData = new FormData();
          for (const key in values) {
            formData.append(key, values[key]);
          }
          if (files.image) {
            formData.append("image", files.image);
          }
          files.detailImages1.forEach((file) => {
            formData.append("detailImages", file);
          });
          files.detailImages2.forEach((file) => {
            formData.append("detailImages", file);
          });

          try {
            const res = await fetch("http://localhost:3000/turbolar", {
              method: "POST",
              body: formData,
            });
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await res.json();
            console.log("Success:", data);
            navigate("/all")
            resetForm();
            
            setFiles({ image: null, detailImages1: [], detailImages2: [] });
          } catch (error) {
            console.error("Error:", error);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <h1 className="elan_yerlesdir">Elan yerleştirmek</h1>
            <div className="input_container">
              <label htmlFor="admin">Admin</label>
              <Field name="admin" type="text" />
              <ErrorMessage name="admin" component="div" className="error" />

              <label htmlFor="city">City</label>
              <Field name="city" type="text" />
              <ErrorMessage name="city" component="div" className="error" />

              <label htmlFor="title">Title</label>
              <Field name="title" type="text" />
              <ErrorMessage name="title" component="div" className="error" />

              <label htmlFor="marka">Marka</label>
              <Field name="marka" type="text" />
              <ErrorMessage name="marka" component="div" className="error" />

              <label htmlFor="model">Model</label>
              <Field name="model" type="text" />
              <ErrorMessage name="model" component="div" className="error" />

              <label htmlFor="il">İl</label>
              <Field name="il" type="text" />
              <ErrorMessage name="il" component="div" className="error" />

              <label htmlFor="motor">Motor</label>
              <Field name="motor" type="text" />
              <ErrorMessage name="motor" component="div" className="error" />

              <label htmlFor="km">Km</label>
              <Field name="km" type="text" />
              <ErrorMessage name="km" component="div" className="error" />

              <label htmlFor="desc">Description</label>
              <Field name="desc" type="text" />
              <ErrorMessage name="desc" component="div" className="error" />

              <label htmlFor="price">Price</label>
              <Field name="price" type="text" />
              <ErrorMessage name="price" component="div" className="error" />

              <label htmlFor="image">Image Main</label>
              <input
                id="image"
                name="image"
                type="file"
                onChange={(event) => {
                  setFiles({ ...files, image: event.currentTarget.files[0] });
                  setFieldValue("image", event.currentTarget.files[0].name);
                }}
              />
              <ErrorMessage name="image" component="div" className="error" />

              <label htmlFor="detailImages1">Detail Images 1</label>
              <input
                id="detailImages1"
                name="detailImages1"
                type="file"
                multiple
                onChange={(event) => {
                  setFiles({
                    ...files,
                    detailImages1: Array.from(event.currentTarget.files),
                  });
                  setFieldValue(
                    "detailImages1",
                    Array.from(event.currentTarget.files).map(
                      (file) => file.name
                    )
                  );
                }}
              />
              <ErrorMessage
                name="detailImages1"
                component="div"
                className="error"
              />

              <label htmlFor="detailImages2">Detail Images 2</label>
              <input
                id="detailImages2"
                name="detailImages2"
                type="file"
                multiple
                onChange={(event) => {
                  setFiles({
                    ...files,
                    detailImages2: Array.from(event.currentTarget.files),
                  });
                  setFieldValue(
                    "detailImages2",
                    Array.from(event.currentTarget.files).map(
                      (file) => file.name
                    )
                  );
                }}
              />
              <ErrorMessage
                name="detailImages2"
                component="div"
                className="error"
              />
            </div>
            <div className="submit_div">
              <button
                type="submit"
                className="submit_btn"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default YeniElan;
