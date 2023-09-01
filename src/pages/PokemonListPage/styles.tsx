import styled from 'styled-components';
//@ts-ignore
import pokemonFundo06 from '../../assets/pokemonFundo06.jpg'

export const ContainerCard = styled.div`
  max-width: 100%;
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
  min-height: 100vh;
`

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
`
export const ButtonPagination = styled.button`
  border-radius: 5px;
  border: transparent;
  background-color: #33A4F5;
  color: #FFFFFF;
  cursor: pointer;
  height: 5vh;
  width: 20vh;
  font-family: "Poppins", sans-serif;
  margin-left: 1vh;
  margin-top: 5vh;
  font-size: 1.7vh;
  font-weight: bold;
`

export const SearchPokemon = styled.div`
  
  position: relative;
  width: 246px;
  margin: auto;
  margin-bottom: 1rem;

  input {
  position: relative;
  width: 100%;
  padding: 20px 10px 10px;
  background: transparent;
  outline: none;
  box-shadow: none;
  border: none;
  color: #23242a;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  z-index: 10;
  }

  span {
    position: absolute;
  left: 0;
  padding: 20px 10px 10px;
  font-size: 1em;
  color: #2c71b7;
  letter-spacing: 00.05em;
  transition: 0.5s;
  pointer-events: none;
  }

  input:valid ~span,
  input:focus ~span
  {
  color: #2c71b7;
  transform: translateX(-10px) translateY(-34px);
  font-size: 0,75em;
  }

  i {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background:  #ffcb05;
  border-radius: 4px;
  transition: 0.5s;
  pointer-events: none;
  z-index: 9;
  }

  input:valid ~i,
  input:focus ~i {
  height: 44px;
  }

`