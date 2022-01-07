import { useRef, useState, useEffect } from 'react';
import useContextMenu from "../../hooks/useContextMenuClick";
import styles from './../../../styles/MenuContext.module.css';
import Link from "next/link";

const Menu = ({folder}) => {
  const { anchorPoint, show } = useContextMenu();
  console.log(folder)
  if (show) {
    return (
      <ul className={styles.menu} style={{ top: anchorPoint.y, left: anchorPoint.x }}>
        <Link href={`/folders/${folder._id}`}>
        <li className={styles.menu__list}>
          <i className="fa fa-folder-open mr-2"></i>  Abrir Carpeta
        </li>
        </Link>
        <li className={styles.menu__list}>
          Share
        </li>
        <li className={styles.menu__list}>
          Copy to
        </li>
        <li className={styles.menu__list}>
          Descargar
          <div className={`${styles.menu__submenu_container} ${styles.menu}`}>
							<ol>
								<li  className={styles.menu__list}><label><span></span> Descarga todos los archivos</label></li>
								<li  className={styles.menu__list}><label><span></span> Descarga como Zip</label></li>
								<li  className={styles.menu__list}><label><span></span> Descarga como Rar</label></li>
				
							</ol>
					
						</div>
        </li>
        <hr />
        <li className={styles.menu__list}>
          Refresh
        </li>
        <li className={styles.menu__list}>
          Delete
        </li>
      </ul>
    );
  }
  return <></>;
};

export default Menu;
