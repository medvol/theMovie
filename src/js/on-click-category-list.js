import { MovieApiService } from './api-movie-service';
import { createMarkupMovies } from './create-markup-movies';
import { slickLoader } from './loader';

const films = document.querySelector('.main-films');
const pageTitle = document.querySelector('.main-header');
const videos = document.querySelector('.videos');
const pageSubTitle = document.querySelector('.most-watched');

const categoryMovie = new MovieApiService();

export default async function onClickCategory(event) {
  const element = event.target.closest('li[data-id]');
  const id = element.dataset.id;
  videos.innerHTML = '';
  films.innerHTML = '';
  pageTitle.textContent = element.firstElementChild.textContent;
  pageSubTitle.classList.add('visually-hidden');

  slickLoader();
  try {
    const ganres = await categoryMovie.fetchMoviesForGenres(id);

    createMarkupMovies(ganres, videos);
    SlickLoader.disable();
  } catch (error) {
    console.log(error);
  }
}
