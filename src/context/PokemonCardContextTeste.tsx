import React, { ReactNode, createContext, useState } from "react";
import { toast } from "react-toastify";


// interface PokemonData {

//   id: number;
//   name: string;
//   amount: number;
// }

export interface PokemonData {
  name: string;
  url: string;
  id: number;
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
      home: {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
      url: string;
    };
  }>;
  moves: Array<{
    move: {
      name: string;
      url: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
    effort: number;
  }>;
}

export interface PokemonCardContextData {
  pokemonCart: PokemonData[]
  addToPokemon: (pokemon: PokemonData) => void
}

export const PokemonCardContextTeste = createContext<PokemonCardContextData>({
  pokemonCart: [],
  addToPokemon: () => { }
})

interface PokemonCardProviderProps {
  children: ReactNode
}

const PokemonCardProvider: React.FC<PokemonCardProviderProps> =
  ({ children }) => {

    const [pokemonCart, setPokemonCart] = useState<PokemonData[]>([])


    const addToPokemon = (pokemon: PokemonData) => {
      const checkPokemon = pokemonCart.find((p) => p.id === pokemon.id);


      if (checkPokemon) {
        toast.error("Esse Pokémon já foi capturado!");
        return;
      }

      setPokemonCart([...pokemonCart, { ...pokemon }]);
    };

    return (
      <PokemonCardContextTeste.Provider
        value={{ pokemonCart, addToPokemon }}
      >
        {children}
      </PokemonCardContextTeste.Provider>

    )
  }

export default PokemonCardProvider