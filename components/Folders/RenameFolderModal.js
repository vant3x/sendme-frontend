import React, { useState, useContext, useEffect } from "react";
import axiosClient from "../../config/axios";
import { useRouter } from "next/router";
import appContext from "../../context/app/appContext";

const RenameFolderModal = ({valueModal, renameFolder, showFolderRename}) => {
  const [hideModal, setModal] = useState(false);
  const [folderName, setFolderName] = useState(renameFolder?.folderName);
  const [disabledNewFolder, setDisabledNewFolder] = useState(false);
  const [errorState, setError] = useState({});

  const AppContext = useContext(appContext);
  const { setFolderModal, folderModal } = AppContext;

  const router = useRouter();

  const hideFolderModal = () => {
    setModal(true);
  };

  const newFolder = async (e) => {
    e.preventDefault();
    setDisabledNewFolder(true);
    const data = {
      folderName,
    };
    try {
      const response = await axiosClient.post(`/api/folders`, data);
      console.log(response)
      console.log(response.data)
      setDisabledNewFolder(false);
      router.push("/folders");
      hideFolderModal();
    } catch (error) {
       console.log(error)
       console.log(error.response.data)
       setError(error.response.data);
       console.log({stateError: errorState})
      // showAlert(error.response.data.message);
    }

      setTimeout(() => {
        setDisabledNewFolder(false);
      } , 2000);

  };

  useEffect(() => {
    console.log(valueModal);
   }, [valueModal]);

  return  (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
                  onClick={() => showFolderRename(false)}

          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        x{" "}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"  
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <form onSubmit={(e) => newFolder(e)}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <i className="fas fa-pen text-red-500 text-xl"></i>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Renombrar la carpeta 
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    Ingresa el nuevo nombe de tu carpeta
                    </p>
                  </div>
                  <div>
                    <div className="mb-4 mt-4">
                      <label
                        className="block text-gray-800 text-sm font-bold mb-2"
                        htmlFor="folderName"
                      >
                        Nombre de la carpeta
                      </label>
                      <input
                        type="text"
                        name="folderName"
                        id="folderName"
                        value={folderName}
                        onChange={(e) => {setFolderName(e.target.value);  setError(false); }}
                        className="shadow appereance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Ingresa un nombre"
                      />
                    </div>
                    {
                      errorState && errorState.statusCode === 403 && (
                        <div className="text-red-500 text-sm">{errorState.message}</div>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse ">
              <button
                disabled={disabledNewFolder}
                type="submit"
                className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 ${
                  !disabledNewFolder ? "bg-red-600" : "bg-gray-400"
                }  ${
                  !disabledNewFolder ? "cursor-pointer" : "cursor-not-allowed"
                } text-base font-medium text-white  ${
                  !disabledNewFolder ? "hover:bg-red-700" : "hover:bg-gray-400"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm`}
              >
                Actualizar Carpeta
              </button>
              <button
                type="button"
                onClick={() => {
                  showFolderRename(false)
                }}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RenameFolderModal;
