import React, { createContext, useState, useEffect, ReactNode } from 'react'
import axios, { AxiosResponse } from 'axios'
import { BASE_URL } from '../constants/constants'

interface Pokemon {
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
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };

  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string
    }
  }>;
  moves: Array<{
    move: {
      name: string;
      url: string;
    };
  }>;

  stats: Array<{
    stat: number;
    name: string;
    base_stat: number;
    effort: number;
  }>;
}

// DEFININDO O TIPO PARA O CONTEXTO

interface PokemonContextType {
  pokemons: Pokemon[]
  currentPage: number,
  getPokemons: () => Promise<void>
  handlePreviousPage: () => void,
  handleNextPage: () => void;
  itemsPerPage: number;
}

// CRIANDO O CONTEXTO COM UM VALOR
export const PokemonContext = createContext<PokemonContextType>({
  pokemons: [],
  currentPage: 1,
  getPokemons: async () => { },
  handlePreviousPage: () => { },
  handleNextPage: () => { },
  itemsPerPage: 25,
})

const PokemonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // ESTADOS POKEMONS
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 25;

  const getPokemons = async () => {

    const offset = (currentPage - 1) * itemsPerPage;

    try {
      const response = await axios.get(`${BASE_URL}?limit=${itemsPerPage}&offset=${offset}`);
      const pokemonPromises = response.data.results.map(async (pokemon: any) => {
        const pokemonResponse = await axios.get(pokemon.url);
        return pokemonResponse.data;
      });

      const fetchedPokemons = await Promise.all(pokemonPromises);
      setPokemons(fetchedPokemons);

    } catch (error) {
      console.log(error);
    }
  }

  const handleNextPage = () => {

    setCurrentPage((prevPage) => prevPage + 1)
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    getPokemons()
  }, [currentPage])

  useEffect(() => {
    getPokemons();
  }, []);

  console.log('pokemons==>>>', pokemons)

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        currentPage,
        getPokemons,
        handlePreviousPage,
        handleNextPage,
        itemsPerPage
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider