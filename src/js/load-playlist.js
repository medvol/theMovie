import { MovieApiService } from './api-movie-service';
import { createMarkupPlaylist } from './create-markup-playlist';
import { slickLoader } from './loader';

const videos = document.querySelector('.videos');

const films = document.querySelector('.main-films');
const pageTitle = document.querySelector('.main-header');
// const videos = document.querySelector('.videos');
const pageSubTitle = document.querySelector('.most-watched');

const newsWeekApiService = new MovieApiService();

export default async function loadPlayList() {
  document.querySelector('.footer').classList.add('visually-hidden');

  const savedWatched = localStorage.getItem('watched-movies');
  const parsedWatched = JSON.parse(savedWatched);
  console.log('watched-movies', parsedWatched);

  // export function watchedId(parsedWatched) {
  //   return parsedWatched.map;
  // }

  // const savedQueued = localStorage.getItem('queued-movies');
  // const parsedQueued = JSON.parse(savedQueued);
  // console.log('queued-movies', parsedQueued);

  films.innerHTML = '';
  pageSubTitle.classList.add('visually-hidden');
  videos.innerHTML = '';
  // pageTitle.textContent = element.firstElementChild.textContent;

  slickLoader();
  console.log(parsedWatched);
  // const categoryPlayList = await newsWeekApiService.fetchMovieForId();
  const markup = await createMarkupPlaylist(parsedWatched);
  // console.log(markup);
  videos.insertAdjacentHTML('beforeend', markup);
  SlickLoader.disable();
  document.querySelector('.footer').classList.remove('visually-hidden');
}
