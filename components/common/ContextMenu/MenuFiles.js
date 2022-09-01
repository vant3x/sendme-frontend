import { useRef, useState, useEffect } from "react";
import useContextMenu from "../../hooks/useContextMenuClick";
import styles from "./../../../styles/MenuContext.module.css";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LinkIcon from "@mui/icons-material/Link";
import ShareIcon from "@mui/icons-material/Share";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DownloadIcon } from "@mui/icons-material/Download";
import Divider from "@mui/material/Divider";
import {NestedMenuItem} from 'mui-nested-menu';
import { useRouter } from "next/router";

const MenuFiles = ({
  file,
  handleClose,
  contextMenu,
  showFileInfo,
  setShowFileInfo,
  setFileMetadataInfo,
}) => {

  const router = useRouter();

  const openFile = () => {
    handleClose();
    router.push(`/links/${file.url}`);
  };

  const showFileInfoBar = () => {
    setShowFileInfo(true);
    setFileMetadataInfo(file);
    handleClose();
  }

  
  return (
    <Menu
      open={contextMenu !== null}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={
        contextMenu !== null
          ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
          : undefined
      }
    >
      <MenuItem
        sx={{ pr: 4, mt: 1, fontSize: ".9rem", width:'240px' }}
        onClick={() => openFile()}
      >
        <FileOpenIcon fontSize="small" sx={{ mr: 1 }} /> Abrir archivo{" "}
      </MenuItem>
      <MenuItem sx={{ fontSize: ".9rem" }} onClick={()=> showFileInfoBar()}>
        <InfoIcon fontSize="small" sx={{ mr: 1 }} /> Información
      </MenuItem>
      <MenuItem sx={{ fontSize: ".9rem" }} onClick={handleClose}>
        <FavoriteIcon fontSize="small" sx={{ mr: 1 }} /> Favorito
      </MenuItem>
      <Divider light />
      <MenuItem
        sx={{ fontSize: ".9rem", paddingRight: "40px" }}
        onClick={handleClose}
      >
        <LinkIcon fontSize="small" sx={{ mr: 1 }} /> Obtener enlace
      </MenuItem>
      <MenuItem sx={{ fontSize: ".9rem" }} onClick={handleClose}>
        <ShareIcon fontSize="small" sx={{ mr: 1 }} /> Compartir
      </MenuItem>
      <NestedMenuItem
        leftIcon={<CloudDownloadIcon sx={{ml:2}} />}
        label="Descargar"
        parentMenuOpen={typeof open   !== 'undefined'  ? open : true }
      >
 
        <MenuItem sx={{ fontSize: ".9rem" }} onClick={handleClose}>
          Descargar archivo
        </MenuItem>
        <MenuItem sx={{ fontSize: ".9rem" }} onClick={handleClose}>
          Descargar como Zip
        </MenuItem>
        </NestedMenuItem>

      <MenuItem sx={{ fontSize: ".9rem" }} onClick={handleClose}>
        <EditIcon fontSize="small" sx={{ mr: 1 }} /> Renombrar
      </MenuItem>
      <MenuItem sx={{ fontSize: ".9rem" }} onClick={handleClose}>
        <DeleteIcon fontSize="small" sx={{ mr: 1 }} /> Borrar
      </MenuItem>
    </Menu>
  );
};

export default MenuFiles;
