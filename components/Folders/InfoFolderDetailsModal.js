const InfoFolderDetailsModal = ({
  valueModal,
  showInfoFolderDetailsModal,
  infoFolder,
}) => {

  console.log(infoFolder.files.length)
  console.log(infoFolder)
  return (
    <>
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            onClick={() => showInfoFolderDetailsModal(false)}
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
            <form>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <i className="fas fa-info-circle text-red-500 text-xl"></i>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Información
                    </h3>
                    <div className="mt-2">
                      <p className=" text-gray-500 text-2xl">
                       <span className="text-red-500"><i className="fas fa-folder mr-2"></i></span> {infoFolder.folderName}
                      </p>
                    </div>
                    <div>
                      <div className="mb-4 mt-4">
                        <p
                          className="block text-gray-800 text-sm font-bold mb-2"
                          htmlFor="folderName"
                        >
                         Hay {infoFolder.files.length} archivos en esta carpeta
                        </p>
                        <hr />
                        <p className="mt-2 text-gray-800">
                        <i className="fas fa-lock mr-2"></i>
                          Esta carpeta es privada
                        </p>
                      </div>
                      {/*
                      errorState && errorState.statusCode === 403 && (
                        <div className="text-red-500 text-sm">{errorState.message}</div>
                      )
                      */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse ">
                <button
                  type="button"
                  onClick={() => {
                    showInfoFolderDetailsModal(false);
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
    </>
  );
};

export default InfoFolderDetailsModal;
