import React from "react";
import Link from 'next/link';
import styles from '../../styles/LinkItem.module.css';

const LinkItem = ({link}) => {

    const date = new Date(link.created_at);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const dateFormat = (date.toLocaleDateString('es-CO', options));
    return (
    <tr className="animate__animated animate__fadeIn">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <span className="text-red-500">
              {" "}
              <i className="fas fa-link"></i>
            </span>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {link.originalName} 
              {
                link.originalName.includes('.jpg') || link.originalName.includes('.jpeg') || link.originalName.includes('.png')  ?  <i className="text-xl fas fa-images text-red-500 ml-2"></i> : null
              }
              {
                link.originalName.includes('.mp4')  || link.originalName.includes('.mov')  ?  <i className="text-xl  fas fa-photo-video text-red-500 ml-2"></i> : null

              }
              {
                link.originalName.includes('.mp3')  || link.originalName.includes('.wav') || link.originalName.includes('.mid') || link.originalName.includes('.ac3') ?  <i className="text-xl  fas fa-music text-red-500 ml-2"></i> : null

              }
              {
                link.originalName.includes('.pdf')   ?  <i className="text-xl   far fa-file-pdf text-red-500 ml-2"></i> : null

              }

              {
                link.originalName.includes('.zip') || link.originalName.includes('.rar')  ?  <i className="text-xl  fas fa-file-archive  text-red-500 ml-2"></i> : null

              }
            </div> 
            <Link  href={`/links/${link.url}`}><a  className="text-sm text-red-500 underline hover:text-blue-500"> Ir al link</a></Link>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap sm:visible invisible">
        <div className="text-sm text-gray-900">
          {/* Contraseña: <span> { link.password ? 'Sí' : 'No' }</span> */}
        </div>
        <div className="text-sm text-gray-500">{date.toLocaleDateString()}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap sm:visible invisible">
        <span className="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {link.downloadLimit}
        </span>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium sm:visible invisible">
        <a href="#" className="text-blue-400 hover:text-blue-500">
          Editar
        </a>
        
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium sm:visible invisible">
      <a href="#" className="bg-red-500 px-2 text-gray-400 hover:text-gray-500">
        ...
      </a>
      
    </td>
    </tr>
  );
};

export default LinkItem;
