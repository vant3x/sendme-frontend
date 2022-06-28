import { useRef, useState, useEffect } from "react";
import useContextMenu from "../../hooks/useContextMenuClick";
import styles from "./../../../styles/MenuContext.module.css";
import Link from "next/link";
import axiosClient from "../../../config/axios";
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
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { DownloadIcon } from "@mui/icons-material/Download";
import Divider from "@mui/material/Divider";
import {NestedMenuItem} from 'mui-nested-menu';
import { useRouter } from "next/router";

const MenuFolders = ({
  folder,
  showFolderDelete,
  showFolderRename,
  showInfoFolderDetailsModal,
  showInfoFolderPrivacyModal,
  contextMenu,
  handleClose,
  setCopyLinkToast,
  setFolderZipDownloadToast 
}) => {
  const { anchorPoint, show } = useContextMenu();
  //console.log(folder)

  const folderUrl = `${process.env.frontendUrl}/folders/${folder._id}`;

  const copyFolderLink = () => {
    setCopyLinkToast(true);
    navigator.clipboard.writeText(folderUrl);
    setTimeout(() => {
      setCopyLinkToast(false);
     // setRemoveLinkToastAnimation(true);
    }, 4500);
  }

  const downloadFolderFiles = folder => {
    console.log(folder)
    let a = document.createElement("a");
    handleClose();
    folder.files.forEach((file, idx, array) => {
     // a.href = `${process.env.apiURL}/api/folder/files/${file.file}`;
     console.log({
      superObj: {
        file,
        idx,
        array,
        arrayLength: array.length
      }
    })
    document.body.appendChild(a);

    // let interval =  setInterval(() => {
      a.setAttribute('href', `${process.env.apiURL}/api/folder/files/${file.file}`);
      a.setAttribute("download", idx);
      a.click();
      document.body.removeChild(a);
    /*  if (idx === array.length - 1) {
        clearInterval(interval);
      }
     }, 300, array.length);
    })*/
  }); 

  }

  const downloadCompressedFolderFiles = async folder => {
    showfolderZipToast();
    handleClose();
    const response = await axiosClient.get(`/api/folder/zip/${folder._id}`);
    console.log(response); 
    console.log(response.status); 
    console.log(response.data); 
    if (response.status === 200 && response?.data.message) {
    
      let a = document.createElement("a");
      a.href = `${process.env.apiURL}/api/folder/zip-download/${folder._id}`;
      a.setAttribute("download", Date.now());
      document.body.appendChild(a);
  
      a.click();
      document.body.removeChild(a);
    }
  }

  const showfolderZipToast = () => {  
    setFolderZipDownloadToast(true);
    setTimeout(() => {
      setFolderZipDownloadToast(false);
       // setRemoveLinkToastAnimation(true);
    }, 4500);
  }

  const showFolderInfo = () => {
   showInfoFolderDetailsModal(folder);
   handleClose();

  }

  const router = useRouter();
  
  const openFolder = () => {
    router.push(`/folders/${folder._id}`);
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
        onClick={() => openFolder()}
      >
        <FolderOpenIcon fontSize="small" sx={{ mr: 1 }} /> Abrir carpeta{" "}
      </MenuItem>
      <MenuItem sx={{ fontSize: ".9rem" }} onClick={()=>showFolderInfo()}>
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
      <MenuItem sx={{ fontSize: ".9rem" }} onClick={()=> {handleClose();  showInfoFolderPrivacyModal(folder);}}>
        <ShareIcon fontSize="small" sx={{ mr: 1 }} /> Compartir
      </MenuItem>
      <NestedMenuItem
        leftIcon={<CloudDownloadIcon sx={{ml:2}} />}
        label="Descargar"
        parentMenuOpen={open}
      >
 
        <MenuItem sx={{ fontSize: ".9rem" }} onClick={()=> downloadFolderFiles(folder)}>
          Descarga todos los archivos
        </MenuItem>
        <MenuItem sx={{ fontSize: ".9rem" }} onClick={()=> downloadCompressedFolderFiles(folder)}>
          Descargar como Zip
        </MenuItem>
        </NestedMenuItem>

      <MenuItem sx={{ fontSize: ".9rem" }} onClick={()=> {handleClose();showFolderRename(folder); }}>
        <EditIcon fontSize="small" sx={{ mr: 1 }} /> Renombrar
      </MenuItem>
      <MenuItem sx={{ fontSize: ".9rem" }} onClick={()=> {handleClose(); showFolderDelete(folder);}}>
        <DeleteIcon fontSize="small" sx={{ mr: 1 }} /> Borrar
      </MenuItem>
    </Menu>
    
    );
};

export default MenuFolders;
