import React, { useState, useContext } from 'react';
import Layout from '../../components/Layout/Layout';    
import axiosClient from '../../config/axios';
import appContext from './../../context/app/appContext';
import authContext from './../../context/auth/authContext';
import Alert from './../../components/Alerts/Alert';
import { NotFoundError } from 'next/error';

export async function getServerSideProps({params}) {
    const { link } = params;

    const response = await axiosClient.get(`/api/link/${link}`);
    return {
        props: {
            link: response.data
        }
    }


}

export async function getServerSidePaths() {

    const links = await axiosClient.get('/api/links');
    return {
        paths: links.data.links.map( link => ({
            params: { link: link.url}
        })),
        fallback: false
    }
}



export default ({link, linkInfo}) => {
    // definir el context auth
    const AuthContext = useContext(authContext);
    const { user, auth  } = AuthContext;

    // context de la app
    const AppContext = useContext(appContext);   
     const { showAlert, fileMessage } = AppContext;

    const [hasPassword, setHasPassword] = useState(link.password);
    const [password, setPassword] = useState('');

    const verifyPassword =  async e => {
        e.preventDefault();
        const data = {
            password
        }
        try {
            const response = await axiosClient.post(`/api/link/${link.link}`, data);
            setHasPassword(response.data.password);
        } catch (error) {
            showAlert(error.response.data.message);
        }

    }
    return (
 
        <Layout>
        {
            hasPassword &&  user?.id !== link.author ? (
                <div className="text-center ">
                     <i className="fas fa-lock text-6xl mb-6  text-red-500 mt-2"></i>
                    <p className="text-center text-2xl'">Este enlace se encuentra protegido por una contraseña</p>
                    { fileMessage && <Alert error={true} /> }

                    <div className="flex justify-center mt-5">
                            <div className="w-full max-w-lg">
                            <form 
                             className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                              onSubmit={e => verifyPassword(e)}
                            >
                                <div className="mb-4">
                                    <label className="block text-black text-sm font-bold mb-2" htmlFor="name">
                                        Password
                                    </label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        className="shadow appereance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                        placeholder="Ingresa la contraseña del enlace"
                                        value={password}
                                        onChange={e => setPassword( e.target.value) }
                                    />
                                </div>

                                <button type="text"
                                    type="submit"
                                    className="bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold"
                                    value="Validar Contraseña"
                                > Desbloquear  Enlace <i className="ml-2 fas fa-unlock"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            ) : (

                <div className="flex justify-center">
                    <div className=" bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4 max-w-md mb-10">
                    
                    <h1 className="text-4xl text-center text-gray-700">Descarga tu archivo</h1>
                    <div className="file-info-container text-center">
                       {/* <p><span className="text-red-500"> Tamaño: {}</span></p> */}
                       {
                        link.originalName.includes('.jpg')  || link.originalName.includes('.jpeg')  || link.originalName.includes('.png')  ?  <i className=" my-2 text-5xl fas fa-images text-red-500 ml-2"></i> : null
                      }
                      {
                        link.originalName.includes('.mp4')  || link.originalName.includes('.mov')  ?  <i className="my-2 text-5xl  fas fa-photo-video text-red-500 ml-2"></i> : null
        
                      }
                      {
                        link.originalName.includes('.mp3')  || link.originalName.includes('.wav') || link.originalName.includes('.mid') || link.originalName.includes('.ac3') ?  <i className="text-xl  fas fa-music text-red-500 ml-2"></i> : null
        
                      }
                      {
                        link.originalName.includes('.pdf')   ?  <i className="my-2 text-5xl  far fa-file-pdf text-red-500 ml-2"></i> : null
        
                      }
                      {
                        link.originalName.includes('.zip') || link.originalName.includes('.rar')  ?  <i className="my-2 text-5xl   fas fa-file-archive  text-red-500 ml-2"></i> : null
        
                      }
                        <p className="mt-2 mb-2"><span className="text-gray-700">{link.originalName.split('.')[0].slice(0,30)}</span><span className="text-red-500">.{link.originalName.split('.')[1]}</span></p>
                        <p><span className="text-red-500"> Limite de descargas: </span> <span className="text-gray-700">{link.downloadLimit}</span></p>
                    </div>
                    <div className="flex items-center justify-center mt-8 ">
                        <a  
                            href={`${process.env.apiURL}/api/file/${link.file? link.file : link.fileName}`} 
                            className="bg-red-500 text-center py-4 px-12 text-white rounded uppercase font-bold cursor-pointer hover:bg-red-700 shadow"
                            download
                        >Aquí <i className="ml-2  text-2xl fas fa-file-download"></i></a>
        
                    {/*   <a  
                        href={`${process.env.apiURL}/${link.file}`} 
                        className="bg-red-500 text-center py-3 px-10 text-white rounded uppercase font-bold cursor-pointer"
                    >Ver Aquí</a> */}
        
                    </div>
                    </div>

                </div>
            )
        }
     
       </Layout>
    );
} 