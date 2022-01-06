import React, { useState, useContext } from "react";
import Link from "next/link";
import appContext from "./../context/app/appContext";

const HeaderDropdowns = (props) => {
  const [showModal, setShowModal] = useState(false);
  const AppContext = useContext(appContext);
  const { setFolderModal, folderModal } = AppContext;

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setShowModal(!showModal)}
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-6 ml-1 py-3 bg-black text-white text-sm font-medium uppercase font-bold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Opciones
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {showModal && (
        <div
          className=" animate__animated animate__fadeIn animate__faster origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1">
            <Link href={`/account/${props.user.username}`}>
              <a
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <i className="fas fa-user-alt"></i> Mi Cuenta
              </a>
            </Link>
            <Link href="/links">
              <a
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <i className="fas fa-link"></i> Ver mis enlaces
              </a>
            </Link>
            <Link href="/folders">
              <a
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <i className="fas fa-folder"></i> Ver Carpetas
              </a>
            </Link>

            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => setFolderModal(true)}
            >
              <i className="fas fa-folder-plus"></i> Nueva Carpeta
            </button>
          </div>
          <button
            onClick={() => props.logout()}
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            <i className="fas fa-sign-out-alt"></i> Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default HeaderDropdowns;
