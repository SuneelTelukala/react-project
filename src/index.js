import React from "react";
import ReactDom from 'react-dom/client';
import './index.css';
import App from './App'
import reportwebvitals from './reportWebVitals';


import  '../node_modules/bootstrap/dist/css/bootstrap.css';
import  '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import { FormDemo } from "./React-Farm/form.demo";
import { Bootstrap } from "./components/Bootstrap/bootstrap";




















const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Bootstrap/>
    </React.StrictMode>

)


