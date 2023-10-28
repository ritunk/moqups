import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MoqupsContextProvider from './context/MoqupsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <MoqupsContextProvider>
        <App />
   </MoqupsContextProvider>
   
  
);



