import React, { useState, useContext, useEffect, useRef } from "react";
import axiosClient from "../../config/axios";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


import appContext from "../../context/app/appContext";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const NewFolderModal = ({ valueModal }) => {
  const [hideModal, setModal] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [disabledNewFolder, setDisabledNewFolder] = useState(false);
  const [errorState, setError] = useState({});

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

      setDisabledNewFolder(false);
      router.push("/folders");
      hideFolderModal();
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
      setError(error.response.data);
      console.log({ stateError: errorState });
      // showAlert(error.response.data.message);
    }

    setTimeout(() => {
      setDisabledNewFolder(false);
    }, 2000);
  };

  useEffect(() => {
    console.log(valueModal);
  }, [valueModal]);

  const rootRef = useRef(null);

  
 {/* return !hideModal ? (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
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
                  <i className="fas fa-folder-plus text-red-500 text-xl"></i>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Crea una nueva carpeta
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Puedes agrupar los archivos por carpetas y categorías,
                      también puedes agregar subcarpetas
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
                        onChange={(e) => {
                          setFolderName(e.target.value);
                          setError(false);
                        }}
                        className="shadow appereance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Ingresa un nombre"
                      />
                    </div>
                    {errorState && errorState.statusCode === 403 && (
                      <div className="text-red-500 text-sm">
                        {errorState.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse ">
              <Button
                variant="contained"
                color="primary"
                sx={{ mr: 2, ml: 2 }}
                disabled={disabledNewFolder}
                type="submit"
              >
                Crear Carpeta
              </Button>

              <button
                type="button"
                onClick={() => {
                  setFolderModal(false);
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
              ) : null;}*/}
  return (
    <Box
    sx={{
      height: 300,
      flexGrow: 1,
      minWidth: 300,
      transform: 'translateZ(0)',
      // The position fixed scoping doesn't work in IE11.
      // Disable this demo to preserve the others.
      '@media all and (-ms-high-contrast: none)': {
        display: 'none',
      },
    }}
    ref={rootRef}
  >
    <Modal
      disablePortal
      disableEnforceFocus
      disableAutoFocus
      open={folderModal}
      onClose={()=>setFolderModal(false)}
      aria-labelledby="server-modal-title"
      aria-describedby="server-modal-description"
      sx={{
        display: 'flex',
        p: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      container={() => rootRef.current}
    >
      <Box
        sx={{
          position: 'relative',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: (theme) => theme.shadows[5],
          p: 4,
        }}
      >
        <Typography id="server-modal-title" variant="h6" component="h2">
          Server-side modal
        </Typography>
        <Typography id="server-modal-description" sx={{ pt: 2 }}>
          If you disable JavaScript, you will still see me.
        </Typography>
      </Box>
    </Modal>
  </Box>
  );
};

export default NewFolderModal;
