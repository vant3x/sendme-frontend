import React from "react";

const FolderPageOptions = () => {
  return (
    <div className="md:float-right sm:text-center">
    <button className="ml-4 btn bg-gray-400 px-2 py-1 rounded">
      <i className="fas fa-pen mr-2"></i>
      Editar Carpeta
    </button>
    <button className="ml-4 btn bg-red-400 text-white px-2 py-1 rounded">
      <i className="fas fa-trash  mr-2 "></i>
      Eliminar Carpeta
    </button>
  </div>
  );
};

export default FolderPageOptions;