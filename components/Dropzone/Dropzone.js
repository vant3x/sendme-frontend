import React, { useState, useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import appContext from '../../context/app/appContext';
import authContext from '../../context/auth/authContext';
import DownloadForm from '../DownloadForm';
import PasswordFileForm from '../PasswordFileForm';
import FolderFileContainerInput from '../FolderFileContainerInput';
import Loader from '../Loader/Loader';

const Dropzone = () => {

    // context de la app
    const AppContext = useContext(appContext);
    const { loading, showAlert, uploadFile,  newLink  } = AppContext;

    // context de autenticacion
    const AuthContext = useContext(authContext);
    const { user, auth  } = AuthContext;


    const onDropRejected = () => {
        showAlert('No se pudo subir el archivo, el limite es 500MB, crea una cuenta para subir archivos más grandes.');
    }

    const onDropAccepted = useCallback( async (acceptedFiles) => {
        // crear un form data
        const formData = new FormData();
        formData.append('file', acceptedFiles[0]);
        uploadFile(formData, acceptedFiles[0].path);
    }, []);

    const adminMaxSize = user && user?.role > 0 ? 30000000000 : 3000000000;  
    const maxSize = auth ? adminMaxSize  :  500000000;
    console.log(maxSize);
     // extraer contenido de dropzone
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({onDropAccepted, onDropRejected, maxSize});
    // 

    const files = acceptedFiles.map( file => (
        <li className="bg-white flex-1 p-3 mt-4 mb-4 shadow-lg rounded" key={file.lastModified}>
           <p className="text-lg">
       
            {file.path.split('.')[0].length > 40 ? file.path.split('.')[0].slice(0, 30) + '...' : file.path.split('.')[0]}<span className="text-blue-400">.{file.path.split('.')[1]}</span>
            </p>
            <p className="text-sm text-gray-500 "> { (file.size / Math.pow(1024, 2)).toFixed(2) } MB </p>
        </li>
    ));
     
    return (
        <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0  flex flex-col items-center justify-center border-dashed border-gray-400 border-2 bg-gray-100 px-4">

          { acceptedFiles.length > 0 ? (
            <div className="mt-10 w-full">
                <h4 className="text-2xl font-bold text-center mb-4 animate__animated animate__bounceIn">Archivos</h4>
                <ul className="animate__animated animate__bounceIn">
                  {files}
                 </ul>

                 { 
                     auth ? (
                         <div className="w-full mt-16">
                            <DownloadForm/> 
                            <PasswordFileForm/>                     
                            <FolderFileContainerInput user={user} />
                         </div>
                     ) : "" 
                 }

                {
                    loading ?  
                    <div className="text-center">
                        <Loader/> 
                    </div> : (
                     <button className="bg-blue-700 w-full py-3 rounded-lg text-white my-10 hover:bg-blue-800 animate__animated animate__bounceIn"
                        onClick={()=> newLink()}
                         >
                        Crear Enlace
                     </button>
                    )
                }
            </div>
          ) : (
                <div { ...getRootProps({ className:'dropzone w-full py-32'}) }> 
                <input className="h-100" { ...getInputProps()   } /> 
                {
                    isDragActive ? (<div className="">
                        <p className="text-2xl text-center text-gray-600 py-12"> Suelta el archivo</p>
                    </div> ) : 
                    <div className="text-center"> 
                        <p className="text-gray-700">Arrasta un archivo aquí</p>

                        <button className="bg-blue-700 w-full py-4 rounded-lg text-white my-10 hover:bg-blue-800 flex items-center justify-center" type="button">
                         Selecciona un archivo para subir  <i className="ml-3 fas fa-file-upload text-4xl"></i>
                        </button>
                    </div>
                }
                
            </div>
          ) }
      </div>
    );
}

export default Dropzone;