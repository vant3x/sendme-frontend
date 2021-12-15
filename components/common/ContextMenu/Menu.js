import useContextMenu from "./../../hooks/useContextMenu";
import styles from './../../../styles/MenuContext.module.css';

const Menu = () => {
  const { anchorPoint, show } = useContextMenu();

  if (show) {
    return (
      <ul className={`${styles}.menu`} style={{ top: anchorPoint.y, left: anchorPoint.x }}>
        <li className={`${styles}.menu__list`}>
          Share
        </li>
        <li className={`${styles}.menu__list`}>
          Cut
        </li>
        <li className={`${styles}.menu__list`}>
          Copy to
        </li>
        <li className={`${styles}.menu__list`}>
          Download
        </li>
        <hr />
        <li className={`${styles}.menu__list`}>
          Refresh
        </li>
        <li className={`${styles}.menu__list`}>
          Delete
        </li>
      </ul>
    );
  }
  return <></>;
};

export default Menu;
