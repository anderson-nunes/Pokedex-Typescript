
import React, { useContext } from 'react'
import { Card } from '../../components/Card/Card'
import { PokemonCardContext } from 'context/PokemonCardContext'
import * as S from './styles'
import { Header } from '../../components/Header/Header'

export const Pokedex = () => {

  const { pokemonCart } = useContext(PokemonCardContext)

  return (
    <div>
      <Header />
      <S.ContainerCard>
        {pokemonCart.map((pokemon) => (
          <Card
            pokemon={pokemon}
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            types={pokemon.types[0].type.name || 'normal'}
            id={pokemon.id}
          />
        ))}
      </S.ContainerCard>
    </div>
  )
}

