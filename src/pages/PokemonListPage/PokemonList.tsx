import React, { useContext } from 'react'
import { Card } from '../../components/Card/Card'
import { Header } from '../../components/Header/Header'
import { PokemonContext } from 'context/PokemonContext'
import * as S from './styles'
import { PokemonCardContextTeste } from 'context/PokemonCardContextTeste'


export const PokemonList = () => {

  const { pokemons } = useContext(PokemonContext)

  const { pokemonCart } = useContext(PokemonCardContextTeste)

  console.log('aa===>>', pokemons)

  return (
    <div>
      <Header />
      <S.ContainerCard>
        {
          pokemons
            .filter((pokemonList) => {
              if (
                pokemonCart.find(
                  (pokemonPokedex) =>
                    pokemonList.id === pokemonPokedex.id
                )
              ) {
                return !pokemonList;
              } else {
                return pokemonList;
              }
            })
            .map((pokemon) => {
              return (
                <Card
                  pokemon={pokemon}
                  name={pokemon.name}
                  image={pokemon.sprites.other.dream_world.front_default}
                  types={pokemon.types[0].type.name || 'normal'}
                  id={pokemon.id}
                />
              )
            })}
      </S.ContainerCard>
    </div>
  )
}


