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
import Image from "next/image";


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
          <div className="flex justify-content items-end">

<Typography
  variant="h5"
  noWrap
  color="pinkLight.main"
  component="span"
  sx={{ my: 2, mb:5 }}
>
  Tu URL es:
</Typography>
<img src="/assets/img-vectors/undraw-Real-time-sync.png" width="270px" alt="SendMeFiles"/>

          </div>
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
