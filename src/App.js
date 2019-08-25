import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Reserve from './containers/Reserve/Reserve';
import Header from './components/Header/Header';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Reserve />
    </BrowserRouter>
  );
}

export default App;
