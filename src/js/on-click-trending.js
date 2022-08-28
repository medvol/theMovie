import { MovieApiService } from './api-movie-service';
import { createMarkupMovies } from './create-markup-movies';
import { slickLoader } from './loader';

const films = document.querySelector('.main-films');
const pageTitle = document.querySelector('.main-header');
const videos = document.querySelector('.videos');
const pageSubTitle = document.querySelector('.most-watched');

const categoryMovie = new MovieApiService();

export default async function onClickTrending(event) {
  const element = event.target.closest('li[data-name]');
  document.querySelector('.footer').classList.add('visually-hidden');

  films.innerHTML = '';
  pageSubTitle.classList.add('visually-hidden');
  videos.innerHTML = '';
  pageTitle.textContent = element.firstElementChild.textContent;
  slickLoader();

  try {
    const trending = await categoryMovie.fetchTrendWeekMovie();

    createMarkupMovies(trending, videos);
    SlickLoader.disable();
    document.querySelector('.footer').classList.remove('visually-hidden');
  } catch (error) {
    console.log(error);
  }
}
