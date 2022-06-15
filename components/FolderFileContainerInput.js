import React, { useState, useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import appContext from "../context/app/appContext";
import axiosClient from "../config/axios";

const FolderFileContainerInput = ({ user }) => {
  // context de la app
  const AppContext = useContext(appContext);
  const { setFolder } = AppContext;

  const [hasFolder, setHasFolder] = useState(false);
  const [foldersByUser, setFolders] = useState([]);
  const [value,  setValue] = useState(foldersByUser[0]?.folderName);
  const [id,  setId] = useState(null);
  const [folderName, setFolderName] = useState(null);

  useEffect(() => {
    fetchFolders(user);
  }, [user]);

  const fetchFolders = async (usuario) => {
    try {
      const response = await axiosClient.get(
        `/api/folders/${user.id ? user.id : user._id}`
      );
      setFolders(response.data.folders);
    } catch (error) {
      // console.error(error);
    }
  };

  return (
    <div>
      <div>
        <div className="flex justify-betweens items-center mt-4">
          <label className="text-lg text-gray-800 mr-2">
            Selecciona un folder para el archivo:
          </label>

          <Checkbox
            sx={{
              "&.Mui-checked": {
                color: "customc.main",
              },
            }}
            onChange={() => setHasFolder(!hasFolder)}
          />
        </div>
        <p className="text-lg text-gray-800 mr-2">
          Por defecto los archivos se suben al folder principal
        </p>
      </div>

      {hasFolder ? (
        <>
          {/*  <input 
            placeholder="/home"
            type="text" 
            className="appearance-none w-full mt-2 bg-white border border-gray-400 text-black py-3 px-4 pr-8 rounded leading-none focus:outline focus:border-gray-500" 
            onChange={e => setFolder(e.target.value)}
          /> */}

          {/*<select
            onChange={(e) => setFolder(e.target.value)}
            className="py-3 px-4 pr-4 appearance-none w-full bg-white mt-4  mr- border border-gray-400 text-black  rounded leading-none focus:outline-none focus:border-gray-500"
          >
            <option defaultValue selected disabled>
              {" "}
              -- Selecciona una carpeta --{" "}
            </option>
            {foldersByUser
              ? foldersByUser.map((folder, index) => (
                  <option value={folder._id} key={index}>
                    {folder.folderName}
                  </option>
                ))
              : null}
              </select>*/}
          <Autocomplete
            disablePortal
            id="foldersOptions"
            options={foldersByUser}
            getOptionLabel={(option) => option.folderName}
            value={value}
            onChange={(event, newValue) => {
              console.log(newValue);
              if (newValue) {

              setValue(newValue);
              setId(newValue._id);
              setFolderName(newValue.folderName);  
              setFolder(newValue._id);
            }
            }}
          /*  inputValue={inputValue}
            onInputChange={(e, newInputValue) => {
              setInputValue(newInputValue);
              console.log(newInputValue+2);
              console.log({
                e,
                newInputValue,
              });
            }}*/
            sx={{ width: 300, mt: 2, mb: 1 }}
            renderInput={(params) => (
              <TextField {...params}  label="Selecciona una carpeta" />
            )}
          />
        </>
      ) : null}
    </div>
  );
};

export default FolderFileContainerInput;
