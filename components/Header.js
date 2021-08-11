import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import styles from  './../styles/Header.module.css';
import authContext  from '../context/auth/authContext';
import appContext  from '../context/app/appContext';
import { useRouter } from 'next/router';
import HeaderDropdowns from './HeaderDrowpdown';

const Header = ({newFolder}) => {

  // routing
  const router = useRouter();

  // Extraer el usuario autenticado del storage
  const AuthContext = useContext(authContext);
  const {  user, userAuthtenticate, logout  } = AuthContext;

  // Extraer el contex de la app
  const AppContext = useContext(appContext);
  const {  resetState } = AppContext;

  useEffect(() => {
    userAuthtenticate();
  }, []);

  const redirect = () => {
      router.push('/');
      resetState();
  }



    return (
        <header className="py-8 flex flex-col md:flex-row items-center justify-between">
            <span onClick={()=> redirect()} className={`cursor-pointer sm:mb-4 mb-4 md:mb-0 lg:mb-0`}>
                <h1 className={`${styles.titleLogo} w-64 mb-4 md:mb-0 sm:mb-4 text-gray-800`}>Send<span className="text-red-500">Me</span> </h1>
            </span>
           
          <nav>
          {
            user ? (
                <div className="flex items-center">
                    <p className="mr-2">Hola {user.name ? user.name : null}</p>

            
                    <HeaderDropdowns  user={user} newFolder={newFolder} logout={logout}  />

                   {/* <button 
                        className="bg-black px-5 py-3 rounded text-white font-bold uppercase ml-2 hover:bg-gray-800 sm:visible invisible" 
                        type="button"
                        onClick={()=> logout()}
                    >

                        Cerrar Sesión
                   </button> */}
                  
                </div>
            ) : (
               <>
                <Link href="/login">
                        <a className="bg-red-500 px-5 py-3 rounded text-white font-bold uppercase">Iniciar Sesión</a>
                    </Link>
                    <Link href="/signup ">
                        <a className="bg-black px-5 py-3 rounded text-white font-bold uppercase ml-2 ">Crear Cuenta</a>
                    </Link>
               </>
            )
          }
           
          </nav>
        </header>
    );
}
export default Header;