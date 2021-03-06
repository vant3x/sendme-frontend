import React, { useState, useContext, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';    
import axiosClient from '../../config/axios';
import appContext from '../../context/app/appContext';
import authContext  from '../../context/auth/authContext';
import Profile from '../../components/Profile/Profile';
import { useRouter } from 'next/router';
 /* 
export async function getServerSideProps({params}) {
    
  const { link } = params;

    const response = await axiosClient.get(`/api/link/${link}`);
  
    return {
        props: {
            link: response.data
        }
    } 
}
*/
export async function getServerSidePaths() {
  /*  const links = await axiosClient.get('/api/links')
    return {
        paths: links.data.links.map( link => ({
            params: { link: link.url }
        })),
        fallback: false
    }*/
}



export default ({link}) => {

 // Extraer el usuario autenticado del storage
  const AuthContext = useContext(authContext);
  const {  user,  auth, userAuthtenticate, logout  } = AuthContext;

  const router = useRouter();

  useEffect(() => {

  }, [auth]);
    /*
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

    } */
    return (
 
        <Layout>         
                
               {/* <h1>Hola {user ? user.name : ''}</h1> */}

                <div className="flex justify-center">
                    <Profile user={user} />
                </div>
     
       </Layout>
    );
} 