import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './firstApp/App';
import { CounterApp } from './counterApp/CounterApp';
import { TypeWritter } from './typeWritter/TypeWritter';


ReactDOM.createRoot( document.getElementById('root') ).render(

    <React.StrictMode>
        <TypeWritter/>
        <CounterApp/>
        <FirstApp/>
    </React.StrictMode>

)