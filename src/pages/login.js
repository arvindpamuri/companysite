// import './home.css';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

import React, { useEffect } from 'react';


// Msal imports
// import { useMsalAuthentication, useIsAuthenticated } from "@azure/msal-react";
// import { loginRequest } from "./authConfig";
// import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
// import { InteractionType, InteractionRequiredAuthError } from '@azure/msal-browser';

import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import { SignInButton } from "./../components/SignInButton";


function Login() {

    // const isAuthenticated = useIsAuthenticated();
    // console.log(isAuthenticated)


  return (
    <>

            <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                bgcolor: 'white',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: 1,
                color: 'black',
                minHeight: '100vh',
                minWidth: '100%',
            }}
            >

            <Box>
                <SignInButton /> 
            </Box>
        
            </Box>    

        
    </>
  );
}

export default Login;
