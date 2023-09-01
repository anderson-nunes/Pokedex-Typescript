import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import PokemonProvider from './context/PokemonContext.tsx';

import PokemonCardProvider from './context/PokemonCardContext.tsx'


const rootElement = document.getElementById('root');

if (rootElement) {

  ReactDOM.createRoot(rootElement).render(

    // <PokemonCardProvider>
    <PokemonCardProvider>
      <PokemonProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PokemonProvider>
    </PokemonCardProvider>
    // </PokemonCardProvider>

  )
} else {
  console.log('root não existe')
}

