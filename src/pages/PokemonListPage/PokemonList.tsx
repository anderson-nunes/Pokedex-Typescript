import React, { useContext, useEffect, useState } from 'react';
import { Card } from '../../components/Card/Card';
import { Header } from '../../components/Header/Header';
import { PokemonContext } from 'context/PokemonContext';
import * as S from './styles';
import { PokemonCardContext } from 'context/PokemonCardContext';


export const PokemonList = () => {
  const {
    pokemons,
    handlePreviousPage,
    currentPage,
    itemsPerPage,
    handleNextPage,
  } = useContext(PokemonContext);

  const { pokemonCart } = useContext(PokemonCardContext);

  const [search, setSearch] = useState('');

  const filterPokemon = pokemons
    ?.filter((pokemon) => pokemon?.name?.includes(search.toLowerCase()))
    .filter((pokemonList) => {
      if (
        pokemonCart.find((pokemonPokedex) =>
          pokemonList.id === pokemonPokedex.id)
      ) {
        return false;
      } else {
        return true;
      }
    });

  return (
    <div>
      <Header />
      <S.SearchPokemon>
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          required type="required" />
        <span>Nome do Pokemon</span>
        <i></i>

      </S.SearchPokemon>
      <S.ContainerCard>
        {filterPokemon?.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            types={pokemon.types[0].type.name || 'normal'}
            id={pokemon.id}
          />
        ))}
        <S.ContainerButton>
          <S.ButtonPagination
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Página Anterior
          </S.ButtonPagination>
          <S.ButtonPagination
            onClick={handleNextPage}
            disabled={pokemons.length < itemsPerPage}
          >
            Próxima Página
          </S.ButtonPagination>
        </S.ContainerButton>
      </S.ContainerCard>
    </div>
  );
};

