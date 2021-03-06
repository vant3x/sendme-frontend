import React, { useState, useContext } from 'react';
import appContext from '../context/app/appContext';

const PasswordFileForm = () => {

    // context de la app
    const AppContext = useContext(appContext);
    const { setPassword  } = AppContext;

    const [hasPassword, setHasPassword] = useState(false);

    return (
        <div>
         <div className="flex justify-betweens items-center mt-4">
            <label className="text-lg text-gray-800 mr-2">Proteger con Contraseña:</label>
            <input 
                onChange={(()=> setHasPassword(!hasPassword))}
                type="checkbox"
            />
        </div>

        { hasPassword ? (
          <input
            placeholder="Ingresa una contraseña"
            type="password" 
            className="appearance-none w-full mt-2 bg-white border border-gray-400 text-black py-3 px-4 pr-8 rounded leading-none focus:outline focus:border-gray-500" 
            onChange={e => setPassword(e.target.value)}
            />
        ) : null }

        </div>
    )
}

export default PasswordFileForm;