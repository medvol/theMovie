import { MovieApiService } from './api-movie-service';
import { createMarkupMovieInfo } from './create-markup-modal-info';
import { getFromLocalStorage } from './get-data-from-localstorage';
import { findInLocalStorage } from './find-in-localstorage';
import { setButtonWatchedSettings } from './set-btn-settings';
import { setButtonQueueSettings } from './set-btn-settings';
import { ifUser } from './submit-form';
import Notiflix from 'notiflix';

const overlay = document.querySelector('.overlay');
const modalCardMovie = document.querySelector('.modal_movie_card');
const modalTemplate = document.querySelector('.modal_template');

const btnWatched = () => document.querySelector('.btn_add');
const btnQueue = () => document.querySelector('.btn_queue');

export let queueId = [];
export let idMovie = 0;
export let watchedId = [];

export const LOCALSTORAGE_KEY_W = 'watched-movies';
export const LOCALSTORAGE_KEY_Q = 'queued-movies';

const categoryMovie = new MovieApiService();

export async function onModalShowInfoCard(e) {
  if (e.target.nodeName === 'SPAN') {
    return;
  }
  modalTemplate.classList.add('hide');

  const element = e.target.closest('[id]');
  categoryMovie.movieId = element.id;
  idMovie = element.id;

  const movieForId = await categoryMovie.fetchMovieForId();
  if (!movieForId) {
    modalTemplate.classList.remove('hide');
  }
  overlay.classList.remove('is-hidden');

  createMarkupMovieInfo(movieForId, modalCardMovie);

  if (!ifUser()) {
    btnWatched().textContent = 'ADD TO WATCHED';
    btnQueue().textContent = 'ADD TO QUEUE';
    btnWatched().addEventListener('click', () =>
      Notiflix.Notify.info(`You need to LogIn`, {
        position: 'right-top',
        distance: '30px',
        width: '300px',
        timeout: 1000,
      })
    );
    btnQueue().addEventListener('click', () =>
      Notiflix.Notify.info(`You need to LogIn`, {
        position: 'right-top',
        distance: '30px',
        width: '300px',
        timeout: 1000,
      })
    );
    return;
  } else {
    watchedId = getFromLocalStorage(LOCALSTORAGE_KEY_W);
    queueId = getFromLocalStorage(LOCALSTORAGE_KEY_Q);

    const isMovieInLocalStorageWatched = findInLocalStorage(idMovie, watchedId);
    const isMovieInLocalStorageQueue = findInLocalStorage(idMovie, queueId);

    setButtonWatchedSettings(isMovieInLocalStorageWatched);
    setButtonQueueSettings(isMovieInLocalStorageQueue);
  }
}
