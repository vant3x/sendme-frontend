import { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import List from "@mui/material/List";
import { mainListItems, secondaryListItems } from "./ListItems";
import SizeStorageComponent from "./SizeStorageComponent";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { bgcolor } from "@mui/system";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    /*position: "fixed",*/
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const SideBarMenuComponent = ({ open, toggleDrawer, drawerWidth }) => {
  return (
    <>
      <Drawer variant="permanent" open={open} sx={{display: { xs: 'none', sm: 'block', md: 'block' }}} >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {mainListItems}
          <Divider sx={{ my: 1 }} />
          {secondaryListItems}
          <Divider sx={{ my: 1 }} />
          <Stack
            sx={{ mt: 4 }}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <SizeStorageComponent value={80} />
            {open && (
              <>
                {" "}
                <Typography
                  sx={{ mt: 2 }}
                  variant="p"
                  component="p"
                  color="text.secondary"
                >
                  2TB
                </Typography>
                <Typography
                  sx={{ mt: 2 }}
                  variant="p"
                  component="p"
                  color="text.secondary"
                >
                  Almacenamiento
                </Typography>
         
                <Button
                  sx={{
                    mt: 2,
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color:"white"
                    },
                  }}
                  variant="outlined"
                >
                  Actualiza a premium
                </Button>
              </>
            )}
          </Stack>
        </List>
      </Drawer>
    </>
  );
};

export default SideBarMenuComponent;
