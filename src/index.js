import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Employee from './pages/employee';
import Prospect from './pages/prospect';
import Customer from './pages/customer';
import ShowDetails from './pages/showdetails';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/employees" element={<Employee/>} />
      <Route path="/employees/:id" element={<ShowDetails/>} />

      <Route path="/customers" element={<Customer/>} />
      <Route path="/customers/:id" element={<ShowDetails/>} />

      <Route path="/prospects" element={<Prospect/>} />
      <Route path="/prospects/:id" element={<ShowDetails/>} />

      <Route path="/details/:table/:id" element={<ShowDetails/>} />

      
    </Routes>
    <App/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
