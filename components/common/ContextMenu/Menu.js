import useContextMenu from "./../../hooks/useContextMenu";

const Menu = () => {
  const { anchorPoint, show } = useContextMenu();

  if (show) {
    return (
      <ul className="menu" style={{ top: anchorPoint.y, left: anchorPoint.x }}>
        <li className="menu__list">
          Share
        </li>
        <li className="menu__list">
          Cut
        </li>
        <li className="menu__list">
          Copy to
        </li>
        <li className="menu__list">
          Download
        </li>
        <hr />
        <li className="menu__list">
          Refresh
        </li>
        <li className="menu__list">
          Delete
        </li>
      </ul>
    );
  }
  return <></>;
};

export default Menu;
