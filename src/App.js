import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Home from './pages/home';
import Login from './pages/login'
import { SignInButton } from './components/SignInButton';

// MSAL imports
import { useMsalAuthentication, useIsAuthenticated } from "@azure/msal-react";
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { InteractionType, InteractionRequiredAuthError } from '@azure/msal-browser';


import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";


function handleLogin(instance) {
  instance.loginPopup(loginRequest).catch(e => {
      console.error(e);
  });
}


function App({pca}) {

  const isAuthenticated = useIsAuthenticated();
  console.log(isAuthenticated)

  const { instance } = useMsal();

  return (
    <MsalProvider instance={pca}>

      
      {/* <UnauthenticatedTemplate>
        
        <h1>This will only render if a user is not signed-in.</h1>
        <SignInButton/>

      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <h1>This will only render if a user is signed-in.</h1>
      </AuthenticatedTemplate> */}

      <Home/>
    </MsalProvider>
    
  );
}

export default App;
