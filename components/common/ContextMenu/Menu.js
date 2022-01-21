import { useRef, useState, useEffect } from 'react';
import useContextMenu from "../../hooks/useContextMenuClick";
import styles from './../../../styles/MenuContext.module.css';
import Link from "next/link";

const Menu = ({folder,  showFolderDelete, showFolderRename, showInfoFolderDetailsModal, showInfoFolderPrivacyModal}) => {
  const { anchorPoint, show } = useContextMenu();
  //console.log(folder)

  const folderUrl =  `${process.env.frontendUrl}/folders/${folder._id}`;


  if (show) {
    return (
      <ul className={styles.menu} style={{ top: anchorPoint.y, left: anchorPoint.x }}>
        <Link href={`/folders/${folder._id}`}>
        <li className={styles.menu__list}>
          <i className="fa fa-folder-open mr-2"></i>  Abrir Carpeta
        </li>
        </Link>
        <li className={styles.menu__list} onClick={()=>  showInfoFolderDetailsModal(folder)}>
          <i className="fa fa-info-circle mr-2"></i> Información
        </li>
        <li className={styles.menu__list} onClick={()=>  showInfoFolderDetailsModal(folder)}>
          <i className="fas fa-heart mr-2"></i> Favorito
        </li>
        <hr />
        <li className={styles.menu__list} onClick={() => navigator.clipboard.writeText(folderUrl)}>
        <i className="fas fa-link mr-2"></i> Obtener enlace
        </li>
        {/* TODO: eliminr enlace debe mostrarse dinamicamente */}
        <li className={styles.menu__list} onClick={() => navigator.clipboard.writeText(folderUrl)}>
        <i className="fas fa-unlink mr-2"></i> Eliminar enlace
        </li>
        <li className={styles.menu__list} onClick={()=> showInfoFolderPrivacyModal(folder)}>
        <i className="fas fa-share mr-2"></i> Compartir

        </li>
        <li className={styles.menu__list}>
        <i className="fas fa-cloud-download-alt mr-2"></i>   Descargar
          <div className={`${styles.menu__submenu_container} ${styles.menu}`}>
							<ol>
								<li  className={styles.menu__list}><label><span></span> Descarga todos los archivos</label></li>
								<li  className={styles.menu__list}><label><span></span> Descarga como Zip</label></li>
								<li  className={styles.menu__list}><label><span></span> Descarga como Rar</label></li>
				
							</ol>
					
						</div>
        </li>
    {/*    <li className={styles.menu__list}>
        <i className="fas fa-qrcode mr-2"></i> Compartir con QR

        </li>
    */}
        <hr />
        <li className={styles.menu__list} onClick={()=> showFolderRename(folder) }>
        <i className="fas fa-edit mr-2"></i> Renombrar 
        </li>
        <hr />
        <li className={styles.menu__list} onClick={()=>  showFolderDelete(folder)}>
        <i className="fas fa-trash-alt mr-2"></i> Borrar
        </li>
      </ul>
    );
  }
  return <></>;
};

export default Menu;
