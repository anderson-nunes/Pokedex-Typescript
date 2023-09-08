import React from 'react'
//@ts-ignore
import pokemonlogo from '../../assets/pokemonlogo.png'
import { goToPokedexPage, goToPokemonListPage } from '../../routes/coordinatos'
import { useNavigate } from 'react-router-dom'
import './styles.css'

export const Header = () => {

  const navigate = useNavigate()

  return (
    <div className='container'>
      <div className='container_logo'>
        <img onClick={() => goToPokemonListPage(navigate)} src={pokemonlogo} alt="" />
      </div>
      <div className="center_on_page">
        <div onClick={() => goToPokedexPage(navigate)} className="pokeball">
          <div className="pokeball__button"></div>
        </div>
      </div>
    </div>
  )
}

