import { MovieApiService } from "./api-movie-service";
import { createMarkupMovies } from "./create-markup-movies";

const films = document.querySelector('.main-films');
const pageTitle = document.querySelector('.main-header');
const videos = document.querySelector('.videos');
const pageSubTitle = document.querySelector('.most-watched');

const saerchMovie = new MovieApiService();

export default async function handlerInput(e) {
  e.preventDefault();
  saerchMovie.search = e.target.value.trim();  

  if (saerchMovie.search === '') {
    films.innerHTML = '';
    pageSubTitle.classList.add('visually-hidden');
    videos.innerHTML = '';
    pageTitle.textContent = `Enter a search value`;
  }

  const result = await saerchMovie.fetchSearchMovie();

  if (result.length === 0) {
    films.innerHTML = '';
    pageSubTitle.classList.add('visually-hidden');
    videos.innerHTML = '';
    pageTitle.textContent = `Oops! We didn't find anything. Please try again.`;
  } else {
    
    films.innerHTML = '';
    pageSubTitle.classList.add('visually-hidden');
    videos.innerHTML = '';
    pageTitle.textContent = `Are You search: ${saerchMovie.search}?`;
    createMarkupMovies(result, videos);
  }

}