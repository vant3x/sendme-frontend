import {  useContext, Fragment } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FolderIcon from '@mui/icons-material/Folder';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import HomeIcon from '@mui/icons-material/Home';
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';
import Link from "next/link";
import appContext from "../../context/app/appContext";
import Tooltip from '@mui/material/Tooltip';
import { useRouter } from 'next/router';

const SecondaryListItems = () => { 
  const AppContext = useContext(appContext);

  const { resetState } = AppContext;
  const router = useRouter();

  const goHomeFolder = () => {
    router.push('/folders');
    //    resetState();
  }

   return (

  <Fragment>
    <ListSubheader component="div" inset>
      Carpetas
    </ListSubheader>
    <Tooltip title="Carpeta principal" placement="right" >

    <ListItemButton onClick={()=> {goHomeFolder()}}>
      <ListItemIcon>
        <FolderIcon/>
      </ListItemIcon>
      <ListItemText primary="Principal" />
    </ListItemButton>
    </Tooltip>
    <ListItemButton>
      <ListItemIcon>
        <FolderSpecialIcon/>
      </ListItemIcon>
      <ListItemText primary="Favoritos" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FolderIcon/>
      </ListItemIcon>
      <ListItemText primary="Publico" />
    </ListItemButton>
  </Fragment>
)};

export  default SecondaryListItems;