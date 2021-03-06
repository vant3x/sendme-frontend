import React, { useContext, useEffect }  from "react";
import Layout from "./../components/Layout/Layout";
import MyLinksContainer from '../components/Links/MyLinksContainer';
import authContext  from '../context/auth/authContext';

const MyLinks = () => {

  // Extraer el usuario autenticado del storage
  const AuthContext = useContext(authContext);
  const {  user, userAuthtenticate, logout  } = AuthContext;

  useEffect(() => {
    userAuthtenticate();

  }, []);
  
    return(
        <Layout>
            <MyLinksContainer user={user} />
        </Layout>
    );
}


export default MyLinks; 