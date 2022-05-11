import { useState, useEffect, useRef } from "react";
import axiosClient from "../../config/axios";

const FileInfoMetadataSlide = ({ showFileInfo, setShowFileInfo, fileInfo }) => {
  const [file, setFile] = useState();
  const [fileType, setFileType] = useState();
  /*if (showFileInfo) {
      axiosClient.get(`/api/file/view/${fileInfo.id}`);
  }*/
  let imagePreview = useRef();
  const date = new Date(fileInfo.createdAt);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dateFormat = date.toLocaleDateString("es-CO", options);

  useEffect(async () => {
    if (showFileInfo) {
      console.log(fileInfo);
      const config = { responseType: "blob" };
      const res = await axiosClient
        .get(`/api/file/view/${fileInfo._id}`, config)
        .then((res) => {
          console.log(res);
          console.log(res.data);
          console.log(res.data.type);
          setFileType(res.data.type);
          if (
            fileInfo.originalName.includes(
              ".png" || ".jpg" || ".jpeg" || ".gif"
            )
          ) {
            imagePreview.current.src = URL.createObjectURL(res.data);
          }
          // setFile(URL.createObjectURL(res.data))
          //const fileUrl = URL.createObjectURL(res.data);
          // setFile(res.data);}
          //new File([res.data], res.data.name, {type: res.data.type});

          //  setFile(new File([res.data], res.data.name, {type: res.data.type}));
        });
    }
  }, [fileInfo]);

  if (showFileInfo) {
    return (
      <div
        className="fixed inset-0 overflow-hidden "
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            onClick={() => setShowFileInfo(false)}
            className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity animate__animated animate__fadeIn animate__delay-1s "
            aria-hidden="true"
          ></div>
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto relative w-screen max-w-md">
              <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                <button
                  onClick={() => setShowFileInfo(false)}
                  type="button"
                  className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="sr-only">Close panel</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl animate__animated animate__bounceInRight">
                <div className="px-4 sm:px-6">
                  <h2
                    className="text-lg font-medium text-gray-900"
                    id="slide-over-title"
                  >
                    <span>
                      <i className="fas fa-info-circle"></i>
                    </span>{" "}
                    Información del archivo
                  </h2>
                </div>
                {showFileInfo &&     fileInfo.originalName.includes(
              ".png" || ".jpg" || ".jpeg" || ".gif"
            ) && (
                  <img
                    width="320"
                    className="rounded ml-4 mt-2"
                    ref={imagePreview}
                    alt="preview"
                  />
                )}
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  {/*<div className="absolute inset-0 px-4 sm:px-6">
                    <div
                      className="h-full border-2 border-dashed border-gray-200"
                      aria-hidden="true"
                    ></div>
                    </div>*/}

                  <h2 className="font-bold text-2xl">
                    {fileInfo.originalName}
                  </h2>
                  <h3 className="font-bold my-4">Detalles</h3>
                  <hr />
                  <p className="my-2">
                    {" "}
                    <span className="font-bold  text-gray-800">
                      Limite de descargas:{" "}
                    </span>{" "}
                    {fileInfo.downloadLimit}
                  </p>
                  <hr />
                  <p className="my-2">
                    {" "}
                    <span className="font-bold  text-gray-800">
                      Tipo de archivo:{" "}
                    </span>{" "}
                    {fileType}
                  </p>
                  <hr />
                  <p className="my-2">
                    {" "}
                    <span className="font-bold  text-gray-800">
                      Fecha de subida:{" "}
                    </span>
                    {new Date(fileInfo.created_at).toLocaleDateString()}
                  </p>
                  <hr />

                  <button className="mt-2 btn bg-red-500 text-white px-6 py-2 rounded">
                    Descargar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
};

export default FileInfoMetadataSlide;
