import { MovieApiService } from './api-movie-service';
import { createMarkupMovies } from './create-markup-movies';

const films = document.querySelector('.main-films');
const pageTitle = document.querySelector('.main-header');
const videos = document.querySelector('.videos');
const pageSubTitle = document.querySelector('.most-watched');

const categoryMovie = new MovieApiService();

export default async function onClickTrending(event) {
  const element = event.target.closest('li[data-name]');


  const trending = await categoryMovie.fetchTrendWeekMovie();
  films.innerHTML = '';
  pageSubTitle.classList.add('visually-hidden');
  videos.innerHTML = '';
  pageTitle.textContent = element.firstElementChild.textContent;
  createMarkupMovies(trending, videos);
}
