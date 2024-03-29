import { useEffect, useCallback, useState, useRef } from "react";

const useContextMenu = () => {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  const containerMenu = useRef();

  const handleContextMenu = useCallback(
    (event) => {
      event.preventDefault();
      containerMenu.style.top = `${event.offsetY}px`; 
      containerMenu.style.left = `${event.offsetX}px`; 
      containerMenu.classList.add("active");
      setAnchorPoint({ x: event.pageX, y: event.pageY });
      setShow(true);
    },
    [setShow, setAnchorPoint]
  );

  const handleClick = useCallback(() => {
      if (show) { 
          setShow(false); 
          containerMenu.classList.remove("active");
     }}, [show]);

  useEffect(() => { 
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  return { anchorPoint, show, containerMenu };
};

export default useContextMenu;
