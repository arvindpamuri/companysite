import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
// import Button from '@material-ui/core/Button';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

function handleLogin(instance) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <>
        <button onClick={() => handleLogin(instance)}>Sign in using Popup</button>
    </>
    );
}