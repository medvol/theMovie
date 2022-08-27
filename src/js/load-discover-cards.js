import { MovieApiService } from "./api-movie-service";
import { createMarkupDiscoverCards } from "./create-markup-discover";

const films = document.querySelector('.main-films');


const discoverMovie = new MovieApiService();

export default async function loadDiscoverCards() {
  const result = await discoverMovie.fetchTrendDayMovie();
  const cutResult = result.slice(0, 2);
 
  films.innerHTML = '';

  const resultDiscover = createMarkupDiscoverCards(cutResult);
  appendMarkupDiscoverCards(resultDiscover);
}


function appendMarkupDiscoverCards(MarcupDiscoverCards) {
  films.insertAdjacentHTML('beforeend', MarcupDiscoverCards);
}