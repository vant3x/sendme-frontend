import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import MuiAppBar from '@mui/material/AppBar';
import { styled, alpha } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from '@mui/material/InputBase';
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from '@mui/icons-material/Search';

import { useRouter } from "next/router";
import styles from "./../styles/Header.module.css";
import authContext from "../context/auth/authContext";
import appContext from "../context/app/appContext";
import HeaderUserOptions from "./HeaderUserOptions";
import axiosClient from "../config/axios";



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '28%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    /*paddingRight: `calc(1em + ${theme.spacing(4)})`,*/
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '32ch',
    },
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const drawerWidth = 240;

const Header = ({ newFolder, open, toggleDrawer }) => {
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
    { title: "Precios", path: "/prices" },
    //{ title: "Preguntas frecuentes", path: "/preguntas-frecuentes" },
    { title: "Descarga", path: "/download" },
    { title: "API Docs", path: "/developers/api/docs" },
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
    <AppBar position="fixed" open={open}>
      <Container maxWidth="xl">
        <Toolbar disableGutters        sx={{
              mr: '24px', 
            }}>
        {
          user && <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon display={{xs: "none", md: "block", sm: "block"}}/>
        </IconButton>
        }
          <Link href="/" onClick={()=> redirect()} style={{ cursor: "pointer" }}>
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
          <Link href="/">
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
          ) : (<>
            <Search sx={{    
                display: { xs: "none", md: "flex" }
            }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Busca un archivo o carpeta"
              inputProps={{ 'aria-label': 'search' }}
              sx={{paddingRight: "1rem"}}
            />
          </Search>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>
          </> )}

          {user && (
            <>
              <Badge color="secondary" badgeContent={1} sx={{ mr: 3 }}>
                <NotificationsIcon />
              </Badge>
              <HeaderUserOptions
                user={user}
                newFolder={newFolder}
                handleOpenUserMenu={handleOpenUserMenu}
                handleCloseUserMenu={handleCloseUserMenu}
                anchorUser={anchorElUser}
                logout={
                  user.googleId || user.twitterId || user.githubId
                    ? logoutOauth
                    : logout
                }
              />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
