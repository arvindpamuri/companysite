import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// MSAL imports
import { useIsAuthenticated } from "@azure/msal-react";

import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";

import Employee from './pages/employee';
import Prospect from './pages/prospect';
import Customer from './pages/customer';
import ShowDetails from './pages/showdetails';
import Home from './pages/home';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App({pca}) {

  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  async function authenticate() {

      await instance.loginRedirect(loginRequest)
      .catch(e => {
          console.error(e);
      });
  }

  if(!isAuthenticated) {
      authenticate();
  }


  return (

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employee/>} />
          <Route path="/employees/:id" element={<ShowDetails/>} />

          <Route path="/customers" element={<Customer/>} />
          <Route path="/customers/:id" element={<ShowDetails/>} />

          <Route path="/prospects" element={<Prospect/>} />
          <Route path="/prospects/:id" element={<ShowDetails/>} />

          <Route path="/details/:table/:id" element={<ShowDetails/>} />

        </Routes>
        </BrowserRouter>
    
  );
}

export default App;
