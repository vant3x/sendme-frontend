import React, { useState, useEffect, useContext } from 'react';
import authContext  from '../../context/auth/authContext';
import LinkItem from './LinkItem';


const Links = ({linksUser}) => {
    
    const [userId, setUserId] = useState({});

    return (
        <div>
            <div className="flex flex-col mb-4 mt-4">
            
            <div className="-my-2 overflow-hidden sm:-mx-6 lg:-mx-8">
            
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                
                    <table className="min-w-full divide-y divide-gray-200 ">
                    
                    <thead className="bg-gray-50">
                        <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Enlace
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:visible invisible">
                            Creado
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:visible invisible">
                            Descargas
                        </th>
                     
                        <th scope="col" className="relative px-6 py-3 sm:visible invisible">
                            <span className="sr-only">Editar</span>
                        </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        { 
                            linksUser ?  linksUser.map(link => (
                                <LinkItem key={link._id}  link={link} />
                            )) : null
                        }
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}



export default Links;

