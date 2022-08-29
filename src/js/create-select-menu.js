import { getFromLocalStorage } from './get-data-from-localstorage';
import { findInLocalStorage } from './find-in-localstorage';
import { setButtonWatchedSettings } from './set-btn-settings';
import { setButtonQueueSettings } from './set-btn-settings';

import {
  watchedId,
  queueId,
  LOCALSTORAGE_KEY_W,
  LOCALSTORAGE_KEY_Q,
  idMovie,
} from './on-modal-show-infocard';

// const menuElem = () => document.getElementById('my-select');
const menuElem = document.getElementById('my-select');

// const titleElem = document.querySelector('.select-title');

export function onClickForSelector() {
  console.log('-------');
  menuElem.classList.toggle('open');
}

// titleElem.onclick = function () {
//   menuElem.classList.toggle('open');
// };

// export function selectBtnOnDropDownlist() {
//   titleElem.onclick = function () {
//     menuElem.classList.toggle('open');
//   };

// watchedId = getFromLocalStorage(LOCALSTORAGE_KEY_W);
// queueId = getFromLocalStorage(LOCALSTORAGE_KEY_Q);

// const isMovieInLocalStorageWatched = findInLocalStorage(idMovie, watchedId);
// const isMovieInLocalStorageQueue = findInLocalStorage(idMovie, queueId);

// setButtonWatchedSettings(isMovieInLocalStorageWatched);
// setButtonQueueSettings(isMovieInLocalStorageQueue);
// }
