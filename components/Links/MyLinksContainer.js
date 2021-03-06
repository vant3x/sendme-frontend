import React, { useState, useEffect, useContext } from 'react';
import Links from './Links';
import authContext  from '../../context/auth/authContext';
import axiosClient from '../../config/axios';




const MyLinksContainer = ({user, links}) => {
    // Extraer el usuario autenticado del storage
   // const AuthContext = useContext(authContext);
    //const {  user, userAuthtenticate, logout  } = AuthContext;

    const [linksByUser, setLinks] = useState([]);
    const [userId, setUserId] = useState({});



    useEffect(()=> {
        fetchLinks(user);
       
       } , [user]);
      
   const fetchLinks = async (usuario) => {
        try {   
            const response = await axiosClient.get(`/api/links/${user.id}`); 
            setLinks(response.data.links);
     
        } catch (error) {
           // console.error(error);
      
        }
   }

   

    return (
        <Links linksUser={linksByUser} />
    );
}



export default  MyLinksContainer;