import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
// import Button from '@material-ui/core/Button';
import { useIsAuthenticated, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";


/**
 * Renders a button which, when selected, will open a popup for login
 */
 const Test = () => {
    
    const isAuthenticated = useIsAuthenticated();
    console.log(isAuthenticated)

    return (
    <> 
        <h1>testtttsjhsdhjdshhdbhbdf</h1>
    </>
    );
}

export default Test;