import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Layout from "./../../../components/Layout/Layout";
import ApiDocsMenuComponent from "./../../../components/Developers/ApiDocsMenu";

// pages/404.js
export default function Docs() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Layout>
            <Container disableGutters maxWidth="md" component="main" sx={{ pt: 8, pb: 6, display: "flex" }}>
  
        <Paper  sx={{ py: 6, px: 4, width:"100vw" }} elevation={8}>
        <Box sx={{display:"flex", justifyContent:"center", mb:"16px"}}>
        <Typography
                      variant="h5"
                      noWrap
                      component="h2"
                      sx={{
                        fontWeight: 700,
                        color: "primary.main",
                    
                      }}
                    >
                      Documentación para Developers
                    </Typography>
        </Box>
        <FormControl sx={{ m: 1, minWidth: 132 }} size="small">
          <InputLabel id="demo-simple-select-label">Versión API</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Versión API"
            onChange={handleChange}
          >
            <MenuItem value={10}>1.0</MenuItem>
            <MenuItem value={20}>1.5</MenuItem>
            <MenuItem value={30}>2.0</MenuItem>
          </Select>
        </FormControl>
        <ApiDocsMenuComponent />
        </Paper>
      </Container>
    </Layout>
  );
}
