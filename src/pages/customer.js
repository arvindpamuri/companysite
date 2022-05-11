import React, { useState } from 'react';
import useGetData from './../state/getData'

import './page.css';
import {Box, Button, Item} from '@mui/material';


import Header from '../components/header';
import Insert from '../components/insert';
import ShowPeople from  '../components/showpeople';
import InsertCustomer from '../components/insertCustomer';

const Customer = () => {

    let url = "https://company12.azurewebsites.net/customers/";
    const data = useGetData(url);

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
            sx = {{
                marginTop: "50px"
            }}
            >
                <ShowPeople data={data} table="customers"/>
            </Box>
            
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 1,
                m: 1,
                borderRadius: 1,
                }}
            >
                <Button sx={{ m: 2 }} variant="contained"><InsertCustomer/></Button>
            </Box>

            
        </Box>
        
    );
}

export default Customer;