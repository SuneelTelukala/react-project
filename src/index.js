import React from "react";
import ReactDom from 'react-dom/client';
import './index.css';
import App from './App'
import reportwebvitals from './reportWebVitals';


import  '../node_modules/bootstrap/dist/css/bootstrap.css';
import  '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { Example } from "./Practise.jsx/Usestate/usestate";
import { DataBinding } from "./Practise.jsx/Usestate/usestate1";
import { Shopping } from "./Practise.jsx/ApiData/Shopping";
























const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DataBinding/>
    </React.StrictMode>

)


