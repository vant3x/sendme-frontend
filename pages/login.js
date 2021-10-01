import React, { useContext, useEffect }  from "react";
import Layout from "./../components/Layout/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import authContext from '../context/auth/authContext';
import Alert from './../components/Alerts/Alert';
import BtnSocialAuth from '../components/LoginAndSignupButtons/SocialAuthBtn';
import { useRouter } from 'next/router';

const Login = () => {

  // definir el context
  const AuthContext = useContext(authContext);
  const { message, auth, userOauth, login  } = AuthContext;

  // next router
  const router = useRouter();
 

  useEffect(() => {
    if (auth) {
      router.push('/');
    }
  
  }, [auth]);


  useEffect(() => {
    if (auth) {
      router.push('/');
    }
    userOauth();
  }, []);

  // login redes sociales
  const googleLogin = () => {
    window.open("http://localhost:4000/api/auth/google", "_blank",  "_self");
    if (window.location.pathname === "http://localhost:3000/#");
    window.close();
  }

  const twitterLogin = () => {
    window.open("http://localhost:4000/api/auth/twitter", "_blank",  "_self");
    if (window.location.pathname === "http://localhost:3000/#");
    window.close();
  }


  // formulario y validacion con formik y yup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("No es un email válido")
        .required("El email es obligatorio"),
     // username: Yup.string().required("El usuario es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria")
    }),
    onSubmit: (values) => {
      login(values);
    },
  });

  
  return (
    <Layout>
      <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
        <h2 className="text-4xl font-sans font-bold text-gray-800 text-center my-4">
          Iniciar Sesión
        </h2>

        <div className="lg:flex lg:justify-center ">
        <BtnSocialAuth  onClick={googleLogin} title="Google" type="google" />
        <BtnSocialAuth  onClick={twitterLogin}  title="Twitter" type="twitter" />
        <BtnSocialAuth title="Github" type="github" />

        </div>
        <h2 className="text-auth-horizontal"><span>O inicia con tu correo</span></h2>
        {message &&  <Alert/> }

        <div className="flex justify-center mt-5">
          <div className="w-full max-w-lg">
            <form
              className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
              onSubmit={formik.handleSubmit}
            >

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
                  <div className="text-center">
                  <a href="" className="underline hover:text-red-500">¿Has olvidado tu contraseña?</a>

                  </div>
              <input
                type="submit"
                className="bg-red-500  mt-4 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold cursor-pointer"
                value="Login"
              />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Login;
