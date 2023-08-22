import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import PokemonProvider from './context/PokemonContext.tsx';
import PokemonCardProvider from 'context/PokemonCardContext.tsx';
import PokemonCardTesteProvider from './context/PokemonCardContextTeste.tsx'


const rootElement = document.getElementById('root');

if (rootElement) {

  ReactDOM.createRoot(rootElement).render(

    // <PokemonCardProvider>
    <PokemonCardTesteProvider>
      <PokemonProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PokemonProvider>
    </PokemonCardTesteProvider>
    // </PokemonCardProvider>

  )
} else {
  console.log('root não existe')
}

