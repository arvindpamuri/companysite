import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './home.css'
import React, { useEffect, useState } from 'react';

import Test from './test';

// Msal imports
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { InteractionType, InteractionRequiredAuthError } from '@azure/msal-browser';

import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import { SignInButton } from "../components/SignInButton";


function Home() {

    const [askAuth, setaskAuth] = useState(true);

    const { instance } = useMsal();
    const isAuthenticated = useIsAuthenticated();

    async function authenticate() {

        let login = await instance.loginRedirect(loginRequest)
        .catch(e => {
            console.error(e);
        });

        console.log(login);
        setaskAuth(true);

    }

    if(!isAuthenticated) {
        console.log("authn")
        authenticate();
    }

    
    // console.log("In Home authenticated----",isAuthenticated)
    // console.log(localStorage)

    // useEffect(() => {
    //     instance.loginRedirect(loginRequest).catch(e => {
    //         console.error(e);
    //     });
    // });


  return (
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

        <div className='home'>
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
            > <Test/>
            </Box>


            <Link className="link" to="/employees">
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
            > Employee details
            </Box>
            </Link>

            <Link className="link" to="/customers">
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
            > Customer details
            </Box>
            </Link>

            <Link className="link" to="/prospects">
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
            >Prospect details
            </Box>
            </Link>

            </Box>    
        </div>
        </AuthenticatedTemplate>
        

        
    </>
  );
}

export default Home;
