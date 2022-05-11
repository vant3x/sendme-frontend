import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Layout from "./../components/Layout/Layout";

const RecuperarPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("No es un email válido")
        .required("El email es obligatorio"),
      // username: Yup.string().required("El usuario es obligatorio"),
    }),
    onSubmit: (values) => {
      // login(values);
    },
  });
  return (
    <>
      <Layout>
        <h2 className="animate__animated animate__fadeIn text-3xl sm:text-4xl font-sans font-bold text-gray-800 text-center my-4">
          Recupera tu contraseña{" "}
        </h2>{" "}
        <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
          <div className="flex justify-center mt-5">
            <div className="w-full max-w-lg">
              <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-2 text-center">
                <form onSubmit={formik.handleSubmit}>
                  <i className="fas fa-envelope-square text-red-500 text-6xl mb-2">
                    {" "}
                  </i>
                  <p className="mb-2">
                    Te enviaremos un enlace a tu correo para recuperar tu
                    contraseña, no compartas este enlace con nadie:
                  </p>{" "}
                  <input
                    type="email"
                    id="email"
                    placeholder="Ingresa tu email *"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="shadow appereance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />{" "}
                  {formik.touched.email && formik.errors.email ? (
                    <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold"> Error </p>{" "}
                      <p> {formik.errors.email} </p>{" "}
                    </div>
                  ) : null}{" "}
                  <input
                    type="submit"
                    className="bg-red-500  mt-4 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold cursor-pointer"
                    value="Recuperar contraseña"
                  />
                </form>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </Layout>{" "}
    </>
  );
};

export default RecuperarPassword;
