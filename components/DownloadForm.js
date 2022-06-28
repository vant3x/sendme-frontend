import React, { useContext } from 'react';
import appContext from '../context/app/appContext';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DonwloadForm = () => {
    // context de la app
    const AppContext = useContext(appContext);
    const { setDownloads } = AppContext;


    return (
        <div>
            {/*
            <label className="text-lg text-gray-800">Eliminar tras:</label>
            <select 
                onChange={e => setDownloads(parseInt(e.target.value))}
                name="" id="" 
                className="mt-2 appearance-none w-full bg-white border border-gray-400 text-black py-4 px-4 pr-8 rounded leading-none focus:outline-none focus:border-gray-500"
            >
                <option selected disabled>-- Seleccione --</option>
                <option value="1">1 Descarga</option>
                <option value="5">5 Descargas</option>
                <option value="10" >10 Descargas</option>
                <option value="20" >20 Descargas</option>
                <option value="100">100 Descargas</option>
            </select>
    */}
            <label className="text-lg text-gray-800">Eliminar tras:</label>

            <FormControl fullWidth sx={{mt:2}}>
        <InputLabel id="demo-simple-select-label">Seleccione</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Seleccione"
          onChange={e => setDownloads(parseInt(e.target.value))}
          >
          <MenuItem value={1}>1 Descarga</MenuItem>
          <MenuItem value={5}>5 Descargas</MenuItem>
          <MenuItem value={10}>10 Descargas</MenuItem>
          <MenuItem value={20}>20 Descargas</MenuItem>
          <MenuItem value={100}>100 Descargas</MenuItem>
        </Select>
      </FormControl>
        </div>
    )
}

export default DonwloadForm;