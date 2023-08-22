import styled from 'styled-components';
//@ts-ignore
import pokemonFundo06 from '../../assets/pokemonFundo06.jpg'

export const ContainerCard = styled.div`

  max-width: 100%;
  /* min-height: 80vh; */
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

`