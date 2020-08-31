import React from 'react';
import {render} from 'react-dom';
import  TextInput from "./components/input";
import getWord from "./components/dictionary";
import LoginPage from "./pages/loginPage";

let count = 0;
render(
    <React.StrictMode>
        <LoginPage language='en'/>
    </React.StrictMode>,
    document.getElementById('root')
)
