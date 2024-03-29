import { useEffect, useContext } from 'react';
import authContext from "../../../context/auth/authContext";
import axiosClient from "../../../config/axios";


const Success = () => {
    const AuthContext = useContext(authContext);
    const { userOauth,  userAuthtenticate,  user } = AuthContext;

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
    
          userAuthtenticate();
        } else {
            userOauth();

            //window.close();

        }   

      //  authSuccess();
    }, []);

    useEffect(() => { 
    //  alert('login success');

    }, [ user]);


    const authSuccess = async () => {
      const response = await  axiosClient.get('/api/auth/success');
    }
 

    return (
        <></>
    )

}

export default Success;