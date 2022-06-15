import React, { useState, useEffect, useContext, useRef } from "react";
import axiosClient from "../../config/axios";
import styled from "styled-components";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled as styledMui } from "@mui/material/styles";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from "@mui/material/Typography";

import { useRouter } from "next/router";

const Input = styledMui("input")({
  display: "none",
});

const ProfileForm = ({ user }) => {
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState({});
  const [userAvatarImg, setAvatarImg] = useState("");
  const [userAvatarImgUrl, setAvatarImgUrl] = useState("");
  const refAvatarImg = useRef("");

  useEffect(async () => {
    const userInfo = await axiosClient.get(
      `/api/user/profile/${
        user && user.id ? user.id : user && user._id ? user._id : null
      }`
    );
    setUserProfile(userInfo.data.user);
    setLoading(false);
  }, [user]);

  const uploadProfilePicture = (e) => {
    console.log(e.target.files);
    console.log(e);
    setAvatarImgUrl(URL.createObjectURL(e.target.files[0]));
    // refAvatarImg.setAttribute("src", userAvatarImgUrl);
  };

  /*useEffect(() => {
    let fileReader, isCancel = false;
    if (userAvatarImg) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setAvatarImgUrl(result)
        }
      }
      fileReader.readAsDataURL(userAvatarImg);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }

  }, [userAvatarImg]);*/

  const UserIconContainer = styled.div`
    border-radius: 100px;
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    text-align: center;
  `;

  return (
    <div className="mt-10 sm:mt-4">
      <div className="mb-8">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              { !loading && userProfile ? (
              <div className="px-4 py-5 bg-white sm:p-6">
                {/*<h3 className="text-3xl text-gray-800 text-center mb-4">
                  Mi Cuenta
                 </h3>*/}
  
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    mb:4
                  }}
                >
                  <Avatar
                    alt={userProfile?.name}
                    src={userAvatarImgUrl}
                    sx={{ width: 86, height: 86, mr: 6 }}
                  />
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <label htmlFor="contained-button-file">
                      <Input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={(e) => {
                          uploadProfilePicture(e);
                        }}
                      />
                      <Button variant="contained" component="span">
                        Subir avatar
                      </Button>
                    </label>
                    <label htmlFor="icon-button-file">
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        onChange={(e) => {
                          uploadProfilePicture(e);
                        }}
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        variant="outlined"
                      >
                        <PhotoCamera />
                      </IconButton>
                    </label>
                  </Stack>
                </Box>
                <Box className="grid grid-cols-6 gap-6 mt-4" sx={{mt:8}}>
                  <div className="col-span-12 sm:col-span-3">
                    <TextField
                      autoComplete="true"
                      id="firstName"
                      name="firstName"
                      defaultValue={user ? userProfile?.name : nulll}
                      label="Nombre"
                      variant="outlined"
                      type="text"
                      fullWidth
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-3">
                  <TextField
                      autoComplete="true"
                      id="lastName"
                      name="lastName"
                      defaultValue={userProfile?.lastname}
                      label="Apellido"
                      variant="outlined"
                      type="text"
                      fullWidth
                    />
                  </div>

                  <div className="col-span-12 sm:col-span-6">
                  <TextField
                      autoComplete="true"
                      id="email"
                      name="email"
                      defaultValue={userProfile?.email}
                      label="Email"
                      fullWidth
                      variant="outlined"
                      type="email"
                    />
                  </div>

                  {/*<div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">País</label>
                      <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                     </div>*/}

                  <div className="col-span-12 sm:col-span-6">
                  <TextField
                      autoComplete="true"
                      id="user"
                      name="user"
                      defaultValue={userProfile?.username}
                      label="Usuario"
                      fullWidth
                      variant="outlined"
                      type="text"
                    />
                  </div>

                  {/*<div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">Contraseña:</label>
                      <input type="password" name="password" id="password" placeholder="Ingresa una nueva contraseña" 
                      className="shadow appereance-none  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-3 shadow-sm sm:text-sm border border-gray-400 rounded-md"/>
                    </div> */}

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                             <Typography
                  variant="p"
                  noWrap
                  component="span"
                  sx={{
                    color: "primary.main",
                    textDecoration: "none",
                    cursor: "pointer",
                    fontSize: '1rem',
                    textDecoration: "underline",  
                    textDecorationOffset: "2rem",
                    ml:2
                  }}
                  
                  
                >
                  Cambiar Contraseña
                </Typography>
                  </div>
  
                </Box>

                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-center">
                  <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    sx={{ mr: 2, mb: 2, mt: 2, "&:hover": { bg: "primary" } }}
                  >
                    Actualizar Cambios
                  </Button>
                </div>
              </div>
              ) : <CircularProgress disableShrink />
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
