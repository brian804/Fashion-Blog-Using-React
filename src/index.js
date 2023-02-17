import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header'
import NavBar from './components/NavBar';
import Article from './components/Article'
import Footer from './components/Footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <NavBar/>
    <Article/>
    <Footer/>
  </React.StrictMode>
);
