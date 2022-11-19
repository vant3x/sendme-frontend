import React, { useContext, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import authContext from "../context/auth/authContext";
import {Alert as CustomAlert} from "./../components/Alerts/Alert";
import AlertExpired from "./../components/Alerts/AlertExpired";
import BtnSocialAuth from "../components/LoginAndSignupButtons/SocialAuthBtn";
import { useRouter } from "next/router";
import Link from "next/link";
import Error from "next/error";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Login = () => {
  // definir el context
  const AuthContext = useContext(authContext);
  const { message, auth, userOauth, login, errorSession } = AuthContext;

  // next router
  const router = useRouter();

  useEffect(() => {
    if (auth) {
      router.push("/");
    }
  }, [auth]);

  useEffect(() => {
    if (auth) {
      router.push("/");
    }

    const token = localStorage.getItem("token");
    if (token) {
      userOauth();
    } else {
      // validar token expirado y error
    }
  }, []);

  // login redes sociales
  const googleLogin = () => {
    window.open(`${process.env.apiURL}/api/auth/google`, "_blank", "_self");
    if (window.location.pathname === "http://localhost:3000/#");
    window.close();
  };

  const twitterLogin = () => {
    window.open(`${process.env.apiURL}/api/auth/twitter`, "_blank", "_self");
    if (window.location.pathname === "http://localhost:3000/#");
    window.close();
  };

  const githubLogin = () => {
    window.open(`${process.env.apiURL}/api/auth/github`, "_blank", "_self");
    if (window.location.pathname === "http://localhost:3000/#");
    window.close();
  };

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
      password: Yup.string().required("La contraseña es obligatoria"),
    }),
    onSubmit: (values) => {
      login(values);
    },
  });

  return (
    <Layout>
      {errorSession && errorSession.statusCode === 401 ? (
        <AlertExpired statusCode={errorSession.statusCode} />
      ) : null}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 className="text-3xl font-sans font-bold text-gray-800 text-center my-4">
            Iniciar Sesión
          </h2>

          <div className="lg:flex lg:justify-center ">
            <BtnSocialAuth onClick={googleLogin} title="Google" type="google" />
            <BtnSocialAuth
              onClick={twitterLogin}
              title="Twitter"
              type="twitter"
            />
            <BtnSocialAuth onClick={githubLogin} title="Github" type="github" />
          </div>
          <h2 className="text-auth-horizontal">
            <span>O inicia con tu correo</span>
          </h2>
          {message && <CustomAlert />}

          <Box
            component="form"
            noValidate
            sx={{ mt: 1, width:"94%" }}
            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
            onSubmit={formik.handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <Box  sx={{width:'100%'}}>
                         <Alert severity="error">
             <AlertTitle>Error</AlertTitle>
              {formik.errors.email}
           </Alert>
              </Box>
            ) : null}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}d
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.password}</p>
              </div>
            ) : null}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuerdame"
              sx={{mt:2}}
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              sx={{ mr: 2, mt: 2 }}
            >
              Login
            </Button>
            <div className="text-centers mt-4">
              <Link href="/recuperar-password">
                <a className="underline hover:text-red-500">
                  ¿Has olvidado tu contraseña?
                </a>
              </Link>
            </div>
          </Box>
        
      </Box>
    </Layout>
  );
};

export default Login;
