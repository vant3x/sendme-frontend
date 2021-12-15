import React, { useContext, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import authContext from "./../context/auth/authContext";
import Alert from "./../components/Alerts/Alert";
import BtnSocialAuth from "../components/LoginAndSignupButtons/SocialAuthBtn";

const Signup = () => {
  // Acceder al state
  const AuthContext = useContext(authContext);
  const { signup, message, token } = AuthContext;

    // signup redes sociales
    const googleSignup = () => {
      window.open(`${process.env.apiURL}/api/auth/google`, "_blank",  "_self");
      if (window.location.pathname === "http://localhost:3000/#");
      window.close();
    }
  
    const twitterSignup= () => {
      window.open(`${process.env.apiURL}/api/auth/twitter`, "_blank",  "_self");
      if (window.location.pathname === "http://localhost:3000/#");
      window.close();
    }
  
    const githubSignup = () => {
      window.open(`${process.env.apiURL}/api/auth/github`, "_blank",  "_self");
      if (window.location.pathname === "http://localhost:3000/#");
      window.close();
    }
  

  // formulario y validacion con formik y yup
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      lastname: Yup.string(),
      email: Yup.string()
        .email("No es un email válido")
        .required("El email es obligatorio"),
      username: Yup.string()
        .min(6, "El usuario debe ser al menos de 6 caracteres")
        .required("El usuario es obligatorio"),
      password: Yup.string()
        .min(6, "La contraseña debe ser al menos de 6 caracteres")
        .required("La contraseña es obligatoria"),
    }),
    onSubmit: (values) => {
      signup(values);
    },
  });

  return (
    <Layout>
      <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
        <h2 className="text-4xl font-sans font-bold text-gray-800 text-center my-4">
          Crear Cuenta
        </h2>
        <div className="lg:flex lg:justify-center ">
          <BtnSocialAuth onClick={googleSignup} title="Google" type="google" action="Sign Up" />
          <BtnSocialAuth onClick={twitterSignup} title="Twitter" type="twitter"action="Sign Up"  />
          <BtnSocialAuth onClick={githubSignup} title="Github" type="github" action="Sign Up" />
        </div>
        <h2 className="text-auth-horizontal">
          <span>O registrate con tu correo</span>
        </h2>

        {message && <Alert />}

        <div className="flex justify-center mt-5">
          <div className="w-full max-w-lg">
            <form
              className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
              onSubmit={formik.handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-black text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appereance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingresa tu nombre (opcional)"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.name && formik.errors.name ? (
                  <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.name}</p>
                  </div>
                ) : null}
              </div>

              <div className="mb-4">
                <label
                  className="block text-black text-sm font-bold mb-2"
                  htmlFor="lastname"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  id="lastname"
                  className="shadow appereance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingresa tu apellido (opcional)"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.lastname && formik.errors.lastname ? (
                  <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.lastname}</p>
                  </div>
                ) : null}
              </div>

              <div className="mb-4">
                <label
                  className="block text-black text-sm font-bold mb-2"
                  htmlFor="lastname"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appereance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingresa tu email *"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.email && formik.errors.email ? (
                  <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.email}</p>
                  </div>
                ) : null}
              </div>

              <div className="mb-4">
                <label
                  className="block text-black text-sm font-bold mb-2"
                  htmlFor="lastname"
                >
                  Usuario
                </label>
                <input
                  type="text"
                  id="username"
                  className="shadow appereance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingresa tu usuario *"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.username}</p>
                  </div>
                ) : null}
              </div>

              <div className="mb-4">
                <label
                  className="block text-black text-sm font-bold mb-2"
                  htmlFor="lastname"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="shadow appereance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingresa tu password *"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.password}</p>
                  </div>
                ) : null}
              </div>

              <input
                type="submit"
                className="bg-red-500  mt-4 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold cursor-pointer"
                value="Registarse"
              />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Signup;
