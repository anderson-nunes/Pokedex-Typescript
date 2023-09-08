import styled from 'styled-components'
//@ts-ignore
import pokemonFundo10 from '../../assets/pokemonFundo10.jpg'

interface CardProps {
  name: string
  types: string
}

const getBackgroundColorByType = (types: string) => {


  switch (types) {
    case 'bug':
      return '#76A866'
    case 'dark':
      return '#704139'
    case 'dragon':
      return '#7038F8'
    case 'electric':
      return '#F8D030'
    case 'fairy':
      return '#EE99AC'
    case 'fighting':
      return '#C03028'
    case 'fire':
      return '#F08030'
    case 'flying':
      return '#A890F0'
    case 'ghost':
      return '#705898'
    case 'grass':
      return '#78C850'
    case 'ground':
      return '#E0C068'
    case 'ice':
      return '#98D8D8'
    case 'normal':
      return '#A8A878'
    case 'poison':
      return '#A040A0'
    case 'psychic':
      return '#F85888'
    case 'rock':
      return '#B8A038'
    case 'steel':
      return '#B8B8D0'
    case 'water':
      return '#6890F0'
    default:
      return 'transparent'
  }
}

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const Card = styled.div<CardProps>`
  position: relative;
  width: 300px;
  height: 450px;
  /* background: rgb(44, 62, 80); */
   background: url(${pokemonFundo10}) no-repeat center center; 
  /* -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; */
  object-fit: cover;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 5rem;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => getBackgroundColorByType(props.types)};
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
  }

  &:hover:before {
    clip-path: circle(300px at 80% -20%);
  }

  &:after {
    content: '${(props) => props.name}';
    position: absolute;
    top: 75%;
    left: 8%;
    font-size: 3em;
    font-weight: 800;
    font-style: italic;
    color: rgba(255, 255, 25, 0.05);
  }

  .imgBx {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 150px;
    transition: 0.5s;
  }

  &:hover .imgBx {
    top: 0%;
    transform: translateY(20%);
  }

  .imgBx img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 270px;
    height: 200px;
  }

  .contentBx {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 10;
  }

  &:hover .contentBx {
    height: 210px;
  }

  .size,
  .color {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
    padding-top: 0;
    padding-bottom: 0;
    
  }

  &:hover .size {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.5s;
  }

  &:hover .color {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.6s;
  }

  .pokebola {
    display: inline-block;
    border-radius: 4px;
    margin-top: 10px;
    text-decoration: none;
    width: 70px;
    color: #111;
    opacity: 0;
    transform: translateY(50px);
    transition: 0.5s;
    margin-bottom: .5rem;
    cursor: pointer;
  }

  &:hover .pokebola {
    opacity: 1;
    transform: translateY(20px);
    transition-delay: 0.75s;
  }
`

export const CardPokeImg = styled.img`
  position: absolute;
  transform: rotateY('360deg');
  left: -6%;
`
export const CardPokeTypes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 50px;
  margin: 0 auto;
  gap: 15px;
  margin-top: 1rem;
`

export const CardTypesImg = styled.img`
  width: 40px;
  height: auto;
`

export const CardtextName = styled.h2`
  position: relative;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
  margin-top: 0.5rem;
  font-size: 1.2rem;
  background: url(https://i.ibb.co/6bs27mS/Pokemon-Wallpaper-4-K-Desktop.jpg)
    no-repeat scroll;
  background-size: cover;
  -webkit-background-clip: text;
  color: transparent;
`

export const ContainerPokeBall = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -2rem 0;
`

export const PokeBallOpen = styled.img`  
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  margin: 0 auto;
`

export const PokeBallClose = styled.img`  
  width: 30px;
`

export const DetailButton = styled.button`
  background-color: #548c1c;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  margin: 1rem 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:   #007bff;
  }
`;
