import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Componenets/Header';
import Recommendation from './Componenets/Recommendation';
import App from './App';
import Filters from './Componenets/Filters';
import Product_list from './Componenets/Product _list';
import Footer from './Componenets/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <> 
        <Header/>
        
        <Filters />
       
        <Product_list/>
        <Recommendation />
        <Footer />
        <App />
    </>
   
 
);

