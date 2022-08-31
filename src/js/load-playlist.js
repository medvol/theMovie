import { MovieApiService } from './api-movie-service';



import parseGanres from './helpers/parse-ganres';
import { createMarkupMovies } from './create-markup-movies';

import { slickLoader } from './loader';

const savedWatched = localStorage.getItem('watched-movies');
const parsedWatched = JSON.parse(savedWatched);

const savedQueued = localStorage.getItem('queued-movies');
const parsedQueued = JSON.parse(savedQueued);

const categoryMovie = new MovieApiService();

const playlist = document.querySelector('[data-name="playlist"]');
const videos = document.querySelector('.videos');
const films = document.querySelector('.main-films');
const pageTitle = document.querySelector('.main-header');
const pageSubTitle = document.querySelector('.most-watched');
const playlistbtn = document.querySelector('.user-settings');
const pagination = document.querySelector('.tui-pagination');
const watchedBtn = document.querySelector('.watched-btn');
const queuedBtn = document.querySelector('.queued-btn');
async function fetchMovie(movies) {
  const promiceArray = movies.map(async idMovie => {
    categoryMovie.movieId = idMovie;
    const movie = await categoryMovie.fetchMovieForId();
    return movie;
  });
  return promiceArray;
}

playlist.addEventListener('click', onClickWatched);
watchedBtn.addEventListener('click', onClickWatched);

async function onClickWatched() {
  const array = await fetchMovie(parsedWatched);

  const allPromise = await Promise.all(array);
  films.innerHTML = '';
  pageSubTitle.classList.add('visually-hidden');
  pagination.classList.add('visually-hidden');
  videos.innerHTML = '';
  pageTitle.classList.remove('main-header__search-info');
  pageTitle.classList.remove('main-header__search-accent');
  pageTitle.textContent = 'Watched';

  slickLoader();

  createMarkupWatched(allPromise, videos);

  queuedBtn.addEventListener('click', onClickQueued);
  watchedBtn.classList.remove('is-active');
  queuedBtn.classList.add('is-active');
  SlickLoader.disable();
}

async function onClickQueued() {
  const array = await fetchMovie(parsedQueued);

  const allPromise = await Promise.all(array);
  films.innerHTML = '';
  pageSubTitle.classList.add('visually-hidden');
  videos.innerHTML = '';
  pageTitle.textContent = 'Queued';
  slickLoader();

  watchedBtn.classList.add('is-active');
  queuedBtn.classList.remove('is-active');
  createMarkupWatched(allPromise, videos);
  SlickLoader.disable();
}

export async function createMarkupWatched(movies, element) {
  const ganres = await categoryMovie.fetchGenresDescription();

  const markup = movies.reduce((acc, movie) => {
    const {
      id,
      title,
      release_date,
      poster_path,
      name,
      vote_average,
      vote_count,
    } = movie;
    const date = release_date ? release_date.slice(0, 4) : '&#128512';
    const average = vote_average ? vote_average.toFixed(1) : '&#128512';
    const imgUrl = `https://image.tmdb.org/t/p`;

    const ganresToString = parseGanres(movie.genres, ganres);

    return (
      acc +
      `<li class="video anim" id="${id}"style="--delay: .4s">
      <div class="video">
        <span class="video-selection">...</span>
        <div class="video-wrapper">
            <img class="video-poster lazyload" src="${imgUrl}/w342${poster_path}"
            srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            data-srcset="${imgUrl}/w500${poster_path} 500w,            
            ${imgUrl}/w342${poster_path} 342w,
            ${imgUrl}/w780${poster_path} 780w,
            ${imgUrl}/original${poster_path} 900w,"
            data-sizes="auto"            

            alt="${title}" />

            <div class="rating__wrapper video-rating">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                    stroke-linejoin="round" class="feather feather-check">
                    <path d="M20 6L9 17l-5-5" />
                </svg>
                <p class="rating-value">${average}</p>
            </div>
        </div>
        <div class="video-description">
          <p class="video-ganre">${ganresToString}</p>
          <p class="video-name">${title ? title : name}</p>
          <p class="video-view">${vote_count} views<span class="seperate video-seperate"></span>${date}</p>
        </div>
      </div>
    </li>`
    );
  }, '');

  element.insertAdjacentHTML('beforeend', markup);
}

