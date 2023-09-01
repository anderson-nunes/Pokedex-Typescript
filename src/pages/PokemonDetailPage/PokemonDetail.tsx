import { Header } from 'components/Header/Header';
import { PokemonContext } from 'context/PokemonContext';
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import * as S from './styles'

export const PokemonDetail = () => {

  const { pokemons } = useContext(PokemonContext)
  const { name } = useParams()

  const pokemon = pokemons.find(
    (pokemon) => pokemon.name === name?.toLowerCase()
  );

  if (!pokemon) {
    // Se o Pokémon não for encontrado, pode exibir uma mensagem de erro ou redirecionar para uma página de erro
    return
  }

  const totalStats =
    pokemon &&
    pokemon.stats.reduce((total, stat) => {
      return total + stat.base_stat;
    }, 0);

  return (
    <>
      <Header />
      <S.ContainerCard>
        <S.ContainerDetailPokemon>
          <S.PokemonAnimation
            src={
              pokemon.sprites.versions["generation-v"]["black-white"]
                .animated.front_default
            }
            alt=""
          />
          <S.PokemonName>{pokemon?.name.charAt(0).toUpperCase() +
            pokemon.name.slice(1)}</S.PokemonName>
          <S.ContainerCardDetailPokemon>
            <S.PokemonImg
              src={
                pokemon.sprites.other.dream_world.front_default
              }
              alt=""
            />

            <S.DetailBaseStats>
              <h3>Base stats</h3>
              {pokemon.stats.map((stat) => {
                return (
                  <S.BaseStats key={stat.name}>
                    <S.StatsAttack>
                      {stat.name === "hp"
                        ? "HP"
                        : stat.name === "special-attack"
                          ? "Sp. Atk"
                          : stat.name === "special-defense"
                            ? "Sp. Def"
                            : stat.name}
                    </S.StatsAttack>
                    <S.StatsBase>{stat.base_stat}</S.StatsBase>
                    <S.ProgressionBar
                      base={stat.base_stat}
                    ></S.ProgressionBar>
                  </S.BaseStats>
                );
              })}
              <S.BaseStats>
                <S.StatsAttack>Total</S.StatsAttack>
                <S.StatsBase>
                  <strong>{totalStats}</strong>
                </S.StatsBase>
              </S.BaseStats>
            </S.DetailBaseStats>
          </S.ContainerCardDetailPokemon>

        </S.ContainerDetailPokemon>
      </S.ContainerCard>
    </>
  )
}