import React from 'react';
import useGetData from './../state/getData'

import './page.css';
import {Box, Button} from '@mui/material';


import Header from '../components/header';
import ShowPeople from  '../components/showpeople';
import InsertCustomer from '../components/insertCustomer';

//msal
import { useIsAuthenticated, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

const Customer = () => {

    let url = "https://company12.azurewebsites.net/customers/";
    const data = useGetData(url);

    const isAuthenticated = useIsAuthenticated();
    console.log("customer true?",isAuthenticated);

    return(
        <>
            <UnauthenticatedTemplate>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        bgcolor: '#1A2027',
                        overflow: 'hidden',
                        borderRadius: '12px',
                        boxShadow: 1,
                        color: 'black',
                        minHeight: '100vh',
                        minWidth: '100%',
                    }}
                    >
                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                        borderRadius: '12px',
                        backgroundColor: 'rgb(18,18,18)',
                        boxShadow: 1,
                        color: '#FFFFFF',
                        minHeight: { xs: 233, md: 200 },
                        minWidth: { xs: 350, md: 300 },
                    }}
                    > Please Login
                    </Box>
                </Box>
            </UnauthenticatedTemplate>

            <AuthenticatedTemplate>
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
            </AuthenticatedTemplate>
        </>
    );
}

export default Customer;