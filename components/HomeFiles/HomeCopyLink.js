import { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Typography from "@mui/material/Typography";
import SnackbarAlert from "./../../components/Alerts/SnackbarAlert";

const HomeCopyLink = ({ url }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(`${process.env.frontendUrl}/links/${url}`);
    handleClick();
  };

  return (
    <div className="lg:flexs">
      {open && (
        <SnackbarAlert
          text="Se copió el enlace"
          open={open}
          handleClose={handleClose}
          vertical="bottom"
          horizontal="center"
          duration={3000}

        />
      )}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          minHeight: "58vh",
        }}
      >
        <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
          <Typography
            variant="h5"
            noWrap
            color="pinkLight.main"
            component="p"
            sx={{ my: 2 }}
          >
            Tu URL es:
          </Typography>
          <p className="text-center mb-4">
            <a
              href={`${process.env.frontendUrl}/links/${url}`}
              className="lg:text-2xl underline hover:text-red-500"
            >
              {`${process.env.frontendUrl}/links/${url}`}{" "}
            </a>
          </p>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ContentCopyIcon />}
            fullWidth
            sx={{ my: 2 }}
            onClick={() => copyLink()}
          >
            Copiar Enlace
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default HomeCopyLink;
