import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useRouter } from "next/router";
import styles from "./../styles/Header.module.css";
import authContext from "../context/auth/authContext";
import appContext from "../context/app/appContext";
import HeaderUserOptions from "./HeaderUserOptions";
import axiosClient from "../config/axios";

const Header = ({ newFolder }) => {
  // routing
  const router = useRouter();
  // Extraer el usuario autenticado del storage
  const AuthContext = useContext(authContext);
  const { user, userAuthtenticate, userOauth, logout } = AuthContext;

  const [googleUserState, setGoogleUserState] = useState();
  // Extraer el contex de la app
  const AppContext = useContext(appContext);
  const { resetState } = AppContext;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      userAuthtenticate();
      userOauth();
    } else {
    }
  }, []);

  const redirect = () => {
    router.push("/");
    resetState();
  };

  // app bar
  const pages = [
    { title: "Iniciar Sesión", path: "/login" },
    { title: "Crear cuenta", path: "/signup" },
  ];


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // fin app bar

  const logoutOauth = () => {
    axiosClient
      .get("http://localhost:4000/api/auth/logout", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data === "done") {
          window.location.href = "/";
        }
      });

    localStorage.removeItem("token");
    router.reload(window.location.pathname);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/" style={{cursor:'pointer'}}>
          <Typography
            variant="h4"
            noWrap
            component="h2"
            sx={{
              mr: 4,
              ml: 4,
              display: { xs: "none", md: "flex" },
              fontFamily: "Lobster",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            S
          </Typography>
            </Link>
          {!user && (
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, mr: 1 }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                    <Link href={page.path}>
                      <Typography textAlign="center">
                        <Box sx={{ textTransform: "capitalize" }}>
                          {page.title}
                        </Box>
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
          <Link href="/" >

          <Typography
            variant="h4"
            noWrap
            component="h2"
            sx={{
              mr: 4,
              ml: 4,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Lobster",
              fontWeight: 700,
              letterSpacing: ".4rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            S
          </Typography>
          </Link>
          {!user ? (
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link href={page.path}>
                  <Button
                    key={page.path}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.title}
                  </Button>
                </Link>
              ))}
            </Box>
          ) : (
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>
          )}

          {user && (
            <HeaderUserOptions 
              user={user}
              newFolder={newFolder}
              handleOpenUserMenu={handleOpenUserMenu}
              handleCloseUserMenu={handleCloseUserMenu}
              anchorUser={anchorElUser}
              logout={user.googleId  || user.twitterId || user.githubId  ? logoutOauth :  logout}
            />)
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
