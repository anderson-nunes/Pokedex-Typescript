import React, { useContext } from 'react'
import * as S from './styles'
import { getTypeImageByType } from '../../components/Card/vector/getTypesPokemonImg'
import { PokemonCardContextTeste, PokemonData } from 'context/PokemonCardContextTeste'
//@ts-ignore
import pokeBolaSemFundo from '../../assets/pokeBolaSemFundo.png'
//@ts-ignore
import pokeBola from '../../assets/pokeBola.png'


export const Card = ({ name, image, types, id, pokemon }:
  {
    pokemon: PokemonData
    name: string
    image: string
    types: string
    id: number
  }) => {

  const { addToPokemon } = useContext(PokemonCardContextTeste)

  console.log('addPokemon==>>', addToPokemon)

  // const handleAddToCart = () => {
  //   const pokemon = {
  //     id,
  //     name,
  //     amount: 1,
  //   };
  //   addToPokemon(pokemon);
  // };



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

        <S.CardPokeImg src={pokeBolaSemFundo} alt="Pokebola Sem fundo" />

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
          <img
            onClick={() => addToPokemon(pokemon)}
            className="pokebola"
            src={pokeBola}
            alt=""
          />
        </div>
      </S.Card>
    </S.CardContainer>
  )
}

