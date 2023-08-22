import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PokemonList } from '../pages/PokemonListPage/PokemonList'
import { PokedexPage } from '../pages/PokedexPage/PokedexPage'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PokemonList />} />
        <Route path='/pokedexPage' element={<PokedexPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router