// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PokemonList } from '../pages/PokemonListPage/PokemonList'
import { PokemonDetail } from '../pages/PokemonDetailPage/PokemonDetail'
import { Pokedex } from '../pages/PokedexPage/PokedexPage'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PokemonList />} />
        <Route path='/pokedexPage' element={<Pokedex />} />
        <Route path='/detailPage/:name/:types/:id' element={<PokemonDetail />} />

      </Routes>
    </BrowserRouter>
  )
}
export default Router