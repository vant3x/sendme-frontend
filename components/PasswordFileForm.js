import React, { useState, useContext } from 'react';
import appContext from '../context/app/appContext';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

const PasswordFileForm = () => {


    // context de la app
    const AppContext = useContext(appContext);
    const { setPassword  } = AppContext;

    const [hasPassword, setHasPassword] = useState(false);

    return (
        <div>
         <div className="flex justify-betweens items-center mt-4">
            <label className="text-lg text-gray-800 mr-2">Proteger con Contraseña:</label>
        
                      <Checkbox
            sx={{
              "&.Mui-checked": {
                color: "customc.main",
              },
            }}
            onChange={(()=> setHasPassword(!hasPassword))}
            />
        </div>

        { hasPassword ? (
   
            <TextField     sx={{my:2}}  fullWidth      onChange={e => setPassword(e.target.value)}
            id="password" type="password" label="Password" placeholder='Ingresa una contraseña' variant="outlined" />

            
        ) : null }

        </div>
    )
}

export default PasswordFileForm;