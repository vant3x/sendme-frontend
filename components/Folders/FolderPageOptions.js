import React from "react";
import Folder from "../../pages/folders/[folder]";

const FolderPageOptions = ({
  folder,
  showFolderDelete,
  showFolderRename
}) => {
  
  return (
    <div className="md:float-right sm:text-center">
      <button  onClick={()=> showFolderRename(folder)} className="ml-4 btn bg-gray-400 px-2 py-1 rounded">
        <i className="fas fa-pen mr-2"></i>
        Editar Carpeta
      </button>
      <button onClick={()=> {showFolderDelete(folder);  }}  className="ml-4 btn bg-red-400 text-white px-2 py-1 rounded">
        <i className="fas fa-trash  mr-2 "></i>
        Eliminar Carpeta
      </button>
    </div>
  );
};

export default FolderPageOptions;
