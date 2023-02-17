import React, { useContext, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import authContext from "./../context/auth/authContext";
import Alert from "./../components/Alerts/Alert";
import BtnSocialAuth from "../components/LoginAndSignupButtons/SocialAuthBtn";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Link from '@mui/material/Link';

const Signup = () => {
  // Acceder al state
  const AuthContext = useContext(authContext);
  const { signup, message, token } = AuthContext;

  // signup redes sociales
  const googleSignup = () => {
    window.open(`${process.env.apiURL}/api/auth/google`, "_blank", "_self");
    if (window.location.pathname === "http://localhost:3000/#");
    window.close();
  };

  const twitterSignup = () => {
    window.open(`${process.env.apiURL}/api/auth/twitter`, "_blank", "_self");
    if (window.location.pathname === "http://localhost:3000/#");
    window.close();
  };

  const githubSignup = () => {
    window.open(`${process.env.apiURL}/api/auth/github`, "_blank", "_self");
    if (window.location.pathname === "http://localhost:3000/#");
    window.close();
  };

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
                <Container  maxWidth="md" sx={{ mt: 4, mb: 4 }} disableGutters={true}>

      <Box
     
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
     
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <h2 className="text-3xl font-sans font-bold text-gray-800 text-center my-4">
          Crear Cuenta
        </h2>
        <div className="lg:flex lg:justify-center ">
          <BtnSocialAuth
            onClick={googleSignup}
            title="Google"
            type="google"
            action="Sign Up"
          />
          <BtnSocialAuth
            onClick={twitterSignup}
            title="Twitter"
            type="twitter"
            action="Sign Up"
          />
          <BtnSocialAuth
            onClick={githubSignup}
            title="Github"
            type="github"
            action="Sign Up"
          />
        </div>
        <h2 className="text-auth-horizontal">
          <span>O registrate con tu correo</span>
        </h2>

        {message && <Alert />}
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
          onSubmit={formik.handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="name"
                id="name"
                fullWidth
                label="Ingresa tu nombre (opcional)"
                autoFocus
                type="text"
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
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastname"
                type="text"
                label="Ingresa tu apellido (opcional)"
                name="lastname"
                autoComplete="family-name"
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Ingresa tu email"
                name="email"
                autoComplete="email"
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                type="text"
                label="Ingresa tu usuario"
                name="username"
                autoComplete="username"
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="password"
                type="password"
                label="Ingresa tu password"
                name="password"
                autoComplete="password"
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
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            sx={{ mr: 2, mt: 2, mb: 2 }}
          >
            Registrarse
          </Button>
          <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2" sx={{mt:2}}>
                  Ya tienes cuenta? Inicia sesión
                </Link>
              </Grid>
            </Grid>
        </Box>
      </Box>
      </Container>
    </Layout>
  );
};
export default Signup;
