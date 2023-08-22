
import React, { useContext } from 'react'
import { Card } from '../../components/Card/Card'
import { PokemonCardContextTeste } from 'context/PokemonCardContextTeste'
import * as S from './styles'
import { Header } from '../../components/Header/Header'

export const PokedexPage = () => {

  const { pokemonCart } = useContext(PokemonCardContextTeste)

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
            types={pokemon.types.map((typeObj) => typeObj.type.name).join(' ')}
            id={pokemon.id}
          />
        ))}
      </S.ContainerCard>
    </div>
  )
}

