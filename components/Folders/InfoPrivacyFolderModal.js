










































































































































































import React, { useState, useContext, useEffect } from "react";
import Toast from "./../Toast/Toast";
import axiosClient from "../../config/axios";

const InfoPrivacyFolderModal = ({
  valueModal,
  showInfoFolderPrivacyModal,
  infoFolderPrivacy,
  setUpdateListFolders,
}) => {
  const [privacyFolder, setPrivacyFolder] = useState(infoFolderPrivacy.privacy);
  const [privacyFolderEmail, setPrivacyFolderEmail] = useState();
  const [copyLinkToast, setCopyLinkToast] = useState(false);
  const [removeLinkToastAnimation, setRemoveLinkToastAnimation] = useState(false);

  console.log(infoFolderPrivacy);
  const updatePrivacyFolder = async (privacy) => {
    const data = {
      privacy,
    };
    try {
      const response = await axiosClient.put(
        `/api/folder/privacy/${infoFolderPrivacy._id}`,
        data
      );
      console.log(data);
      console.log(privacy);
      setUpdateListFolders(true);
    } catch (error) {
      console.log(error);
      // showAlert(error.response.data.message);
    }
  };

  const copyFolderLink = (e) => {
    e.preventDefault();
    setCopyLinkToast(true);
    navigator.clipboard.writeText(
      `${process.env.frontendUrl}/folders/${infoFolderPrivacy._id}`
    );
    setTimeout(() => {
      setCopyLinkToast(false);
      setRemoveLinkToastAnimation(true);
    }, 4500);
  }

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
            onClick={() => showInfoFolderPrivacyModal(false)}
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle  w-full sm:max-w-lg sm:w-full">
            <form>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-8 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <i className="fas fa-share-alt-square text-red-500 text-xl"></i>
                  </div>
                  <div className="mt-3  w-12/12 sm:w-10/12 lg:w-10/12 xl:w-10/12	 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Privacidad
                    </h3>
                    <div className="mt-2">
                      <p className=" text-gray-500 text-2xl">
                        <span className="text-red-500">
                          <i className="fas fa-folder mr-2"></i>
                        </span>{" "}
                        {infoFolderPrivacy.folderName}
                      </p>
                    </div>
                    <div className="mb-4s">
                      <div className="mb-4 mt-4 ">
                        <p className="mt-2 text-gray-800 mb-2 hidden md:hidden  xl:inline-block   lg:inline-block">
                          {privacyFolder === 0 ? (
                            <i className="fas fa-lock mr-2"></i>
                          ) : null}
                          {privacyFolder === 1 ? (
                            <i className="fas fa-users mr-2"></i>
                          ) : null}
                          {privacyFolder === 2 ? (
                            <i className="fas fa-link mr-2"></i>
                          ) : null}
                          {privacyFolder === 0
                            ? "Esta carpeta es privada"
                            : null}
                          {privacyFolder === 1 ? "Invita a un amigo" : null}

                          {privacyFolder === 2
                            ? "Esta carpeta es pública"
                            : null}
                        </p>
                        <p
                          className="block text-gray-800 text-sm font-bold mb-2 hidden md:hidden  xl:block   lg:block"
                          htmlFor="folderName"
                        >
                          Comparte esta carpeta
                        </p>
                        <hr />

                        <div className="">
                          <div
                            onClick={() => {
                              setPrivacyFolder(0);
                              updatePrivacyFolder(0);
                            }}
                            className={` ${
                              privacyFolder === 0 ? "bg-blue-100" : null
                            }   hover:bg-blue-100 rounded-t-md border-solid border-2 border-gray-400 p-2`}
                          >
                            <input
                              type="radio"
                              id="privacyId1"
                              name="privacy"
                              checked={privacyFolder === 0}
                              onChange={() => {
                                setPrivacyFolder(0);
                                updatePrivacyFolder(0);
                              }}
                            />
                            <label
                              htmlFor="privacyId1"
                              className="ml-2 font-bold text-gray-800"
                            >
                              <i className="fas fa-lock mr-2"></i>
                              Privada
                            </label>
                            {privacyFolder === 0 && (
                              <p className="ml-5">Esta carpeta es privada</p>
                            )}
                          </div>
                          <div
                            onClick={() => setPrivacyFolder(1)}
                            className={` ${
                              privacyFolder === 1 ? "bg-blue-100" : null
                            }  hover:bg-blue-100 border-solid border-r-2 border-l-2  border-gray-400 p-2`}
                          >
                            <input
                              type="radio"
                              id="privacyId2"
                              name="privacy"
                              value="email"
                              checked={privacyFolder === 1}
                              onChange={() => setPrivacyFolder(1)}
                            />
                            <label
                              htmlFor="privacyId2"
                              className="ml-2 font-bold text-gray-800"
                            >
                              Compartir a un amigo
                            </label>
                            {privacyFolder === 1 && (
                              <input
                                className="mt-2 shadow appereance-none  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-3 shadow-sm sm:text-sm border border-gray-400 rounded-md"
                                type="email"
                                value={privacyFolderEmail}
                                placeholder="Ingresa un email@"
                                onChange={(e) =>
                                  setPrivacyFolderEmail(e.target.value)
                                }
                              />
                            )}
                            {privacyFolder === 1 && privacyFolderEmail ? (
                              <button className="my-4 bg-red-400   hover:bg-red-500 text-white py-2 px-4 ml-2 rounded">
                                Compartir con amigo
                              </button>
                            ) : null}
                          </div>
                          <div
                            onClick={() => {
                              setPrivacyFolder(2);
                              updatePrivacyFolder(2);
                            }}
                            className={` ${
                              privacyFolder === 2 ? "bg-blue-100" : null
                            } border-solid  hover:bg-blue-100 rounded-b-md  border-bottom border-2 border-gray-400 p-2`}
                          >
                            <input
                              type="radio"
                              id="privacyId3"
                              name="privacy"
                              value="public"
                      
                              checked={privacyFolder === 2}
                              onChange={() => {
                                setPrivacyFolder(2);
                                updatePrivacyFolder(2);
                              }}
                            />
                            <label
                              htmlFor="privacyId3"
                              className="ml-2 font-bold text-gray-800"
                            >
                              Pública
                            </label>
                          </div>
                        </div>
                      </div>
                      {privacyFolder === 2 && (
                        <div role="alert">
                          <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                            Comparte este link con tus amigos
                          </div>
                          <div className="border border-t-0 text-center border-red-200 rounded-b bg-red-100 px-4 py-3 text-red-700">
                            <p className="text-sm">{`${process.env.frontendUrl}/folders/${infoFolderPrivacy._id}`}</p>
                            <button
                              onClick={e=> copyFolderLink(e)}
                              className="my-4 bg-red-400  hover:bg-red-500 text-white py-2 px-6 rounded"
                            >
                              Copiar enlace
                            </button>
                          </div>
                        </div>
                      )}
                      {/*
                      errorState && errorState.statusCode === 403 && (
                        <div className="text-red-500 text-sm">{errorState.message}</div>
                      )
                      */}
                    </div>
                    {copyLinkToast && (
                      <div className={`mt-4 ${!copyLinkToast ?  'animate__animated animate__backOutRight' : 'animate__delay-4s animate__animated animate__backOutLeft'}`}>
                      <Toast
                        icon="fas fa-copy"
                        theme="dark"
                        text="Se copió el enlace"
                        animationEffect="bounceIn"
                        closeBtn={setCopyLinkToast}
                      />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse ">
                <button
                  type="button"
                  onClick={() => {
                    showInfoFolderPrivacyModal(false);
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

export default InfoPrivacyFolderModal;
