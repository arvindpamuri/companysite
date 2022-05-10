import React, { useState } from 'react';
import useGetData from './../state/getData'

import './page.css';
import Box from '@mui/material/Box';


import Header from '../components/header';
import ShowPeople from  '../components/showpeople';

const Employee = () => {

    // const [data, setData] = useState(0);

    const data = useGetData("employee")


    return(
        
        <Box height="100vh" display="flex" flexDirection="column" 
        sx={{
            display: 'flex',
            flexDirection: 'column',
            bgcolor: '#1A2027',
            minHeight: '100vh',
            minWidth: '100%',
          }}
        >
            <Header/>

            <Box
            >
                
            </Box>
            <ShowPeople/>
        </Box>
        
    );
}

export default Employee;