import React, { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LinkIcon from "@mui/icons-material/Link";
import FolderIcon from "@mui/icons-material/Folder";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import LogoutIcon from "@mui/icons-material/Logout";

import appContext from "../context/app/appContext";

const HeaderUserOptions = ({
  user,
  handleCloseUserMenu,
  handleOpenUserMenu,
  anchorUser,
  logout
}) => {
  const [showModal, setShowModal] = useState(false);
  const AppContext = useContext(appContext);
  const { setFolderModal, folderModal } = AppContext;
  const router = useRouter();

  const settings = [
    {
      title: "Perfil",
      path: `/account/${user.username}`,
      icon: (
        <AccountCircleIcon
          sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
        />
      ),
    },
    {
      title: "Ver mis enlaces",
      path: "/links",
      icon: <LinkIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />,
    },
    {
      title: "Ver Carpetas",
      path: "/folders",
      icon: <FolderIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />,
    },
    {
      title: "Nueva Carpeta",
      icon: (
        <CreateNewFolderIcon
          sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
        />
      ),
      customClick: setFolderModal
    },
    {
      title: "Logout",
      icon: <LogoutIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />,
      customClick: logout,
    },
  ];

  return (
    <Box sx={{ flexGrow: 0 }}>
      <span className="mr-2">
        Hola{" "}
        {user.name
          ? user.name
          : user.username
          ? user.username
          : user.twitterId
          ? 1
          : null}
      </span>

      <Tooltip title="Abrir opciones">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={user.name
          ? user.name
          : user.username
          ? user.username
          : user.twitterId
          ? 1
          : null} src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting.title} onClick={()=> {
            setting.customClick ? setting.customClick(true) : null;
            handleCloseUserMenu;
            setting.path ? router.push(setting.path) : null;
          }}>
            {setting.icon}
            <Typography textAlign="center">{setting.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default HeaderUserOptions;
