import React, { useContext } from 'react'
import { PokemonCardContext, PokemonData } from 'context/PokemonCardContext'
import { getTypeImageByType } from '../../components/Card/vector/getTypesPokemonImg'
import { goToPokemonDetailPage } from '../../routes/coordinatos'
import { useNavigate, useLocation } from 'react-router-dom'
import * as S from './styles'
//@ts-ignore
import pokeBolaSemFundo from '../../assets/pokeBolaSemFundo.png'
//@ts-ignore
import pokeBolaFechada from '../../assets/pokeBolaFechada.png'
//@ts-ignore

import pokeBallOpen from '../../assets/pokeBallOpen.png'


export const Card = ({ name, image, types, id, pokemon }:
  {
    pokemon: PokemonData
    name: string
    image: string
    types: string
    id: number
  }) => {

  const { addToPokemon, removePokemon } = useContext(PokemonCardContext)

  const navigate = useNavigate()

  const location = useLocation()

  return (
    <S.CardContainer>
      <S.Card
        key={''}
        name={''}
        types={types}
      >
        <div className="imgBx">
          <img
            src={image}
            alt="Pokemon sprites"
          />
        </div>

        <S.CardPokeImg
          onClick={() => goToPokemonDetailPage(navigate, name, types, id)}
          src={pokeBolaSemFundo} alt="Pokebola Sem fundo" />

        <div className="contentBx">
          <S.CardtextName>{name}</S.CardtextName>
          <div className="size">
            <S.CardPokeTypes>
              {types.split(' ').map((type, index) => (

                <span key={index} className="type">
                  <S.CardTypesImg src={getTypeImageByType(type)} alt={type} />
                  {/* {types} */}
                </span>

              ))}
            </S.CardPokeTypes>
          </div>
          <S.ContainerPokeBall>
            {location.pathname === '/' &&
              <S.PokeBallClose
                onClick={() => addToPokemon(pokemon)}
                className="pokebola"
                src={pokeBolaFechada}
                alt=""
              />
            }
            {location.pathname === '/pokedexPage' &&
              <S.PokeBallOpen

                onClick={() => removePokemon(id)}
                src={pokeBallOpen}
                alt=""
              />
            }
            <S.DetailButton>Detalhes</S.DetailButton>
          </S.ContainerPokeBall>
        </div>
      </S.Card>
    </S.CardContainer>
  )
}

