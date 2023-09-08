import styled from 'styled-components';
//@ts-ignore
import pokemonFundo06 from '../../assets/pokemonFundo06.jpg'

export const ContainerCard = styled.div`

  max-width: 100%;
  min-height: 82vh;
  background: url(${pokemonFundo06}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  object-fit: cover;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
  padding: 4rem;
  position: relative;
  margin-top: 4rem;
`

export const PokemonAnimation = styled.img`
  position: absolute;
  width: 3%;
  right: 42rem;
  top: 5rem;
`

export const PokemonImg = styled.img`
  
  width: 300px;
  height: 300px;
`

export const ContainerDetailPokemon = styled.div`
  
  background-color: #ffff;
  border-radius: 38px;
  height: auto;
  padding: 2rem;
`

export const PokemonName = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin:2rem;
`

export const DetailBaseStats = styled.div`
  width: 307px;
  height: 257px;
  background-color: #fff;
  margin: 1rem;

  h3 {
    font-size:24px;
    font-weight: 800;
    line-height: 29.05px;
  }
`

export const BaseStats = styled.div`
  border-bottom: 1px solid #f1f1f1;
  display: grid;
  grid-template: 1fr / 25% 10% 1fr;
  gap: 15px;
  height: 2rem;

  > p {
    margin: auto 0px;
  }
`;

export const StatsAttack = styled.p`
  text-align: right;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const StatsBase = styled.p`
  text-align: right;
`;

export const ProgressionBar = styled.div<{ base: number }>`
  --progress: calc((${(props) => props.base} / 80) * 100);
  display: flex;
  padding: 0.6rem;

  &::before {
    content: "";
    border-radius: 8px;
    width: calc(var(--progress) * 1%);
    background-color: hsl(var(--progress), 70%, 50%);
  }
`;

export const ContainerCardDetailPokemon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`