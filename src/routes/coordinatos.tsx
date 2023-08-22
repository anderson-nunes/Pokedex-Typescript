export const goToPokemonListPage = (navigate: (path: string) => void) => {
  navigate('/');
};

export const goToPokedexPage = (navigate: (path: string) => void) => {
  navigate('/pokedexPage');
};

export const goToPokemonDetailPage = (navigate: (path: string) => void, name: string, types: string) => {
  navigate(`/detailPage/`);
};