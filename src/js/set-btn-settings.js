import {
  watchedId,
  queueId,
  LOCALSTORAGE_KEY_W,
  LOCALSTORAGE_KEY_Q,
  idMovie,
} from './on-modal-show-infocard';

const btnWatched = () => document.querySelector('.btn_add');
const btnQueue = () => document.querySelector('.btn_queue');

const setButtonWatchedSettings = bool => {
  if (bool) {
    btnWatched().classList.add('is-active');
    btnWatched().removeEventListener('click', addToWatch);
    btnWatched().addEventListener('click', removeFromWatch);
  } else {
    btnWatched().classList.remove('is-active');
    btnWatched().removeEventListener('click', removeFromWatch);
    btnWatched().addEventListener('click', addToWatch);
  }
  btnWatched().textContent = bool ? 'REMOVE FROM WATCHED' : 'ADD TO WATCHED';
};

const setButtonQueueSettings = bool => {
  if (bool) {
    btnQueue().classList.add('is-active');
    btnQueue().removeEventListener('click', addToQueue);
    btnQueue().addEventListener('click', removeFromQueue);
  } else {
    btnQueue().classList.remove('is-active');
    btnQueue().removeEventListener('click', removeFromQueue);
    btnQueue().addEventListener('click', addToQueue);
  }
  btnQueue().textContent = bool ? 'REMOVE FROM QUEUE' : 'ADD TO QUEUE';
};

const addToWatch = () => {
  if (queueId.includes(idMovie)) {
    removeFromQueue();
  }
  watchedId.push(idMovie);

  localStorage.setItem(LOCALSTORAGE_KEY_W, JSON.stringify(watchedId));
  setButtonWatchedSettings(true);
};

const addToQueue = () => {
  if (watchedId.includes(idMovie)) {
    removeFromWatch();
  }
  queueId.push(idMovie);

  localStorage.setItem(LOCALSTORAGE_KEY_Q, JSON.stringify(queueId));
  setButtonQueueSettings(true);
};

const removeFromWatch = () => {
  const elementIndexInArray = watchedId.indexOf(idMovie);
  watchedId.splice(elementIndexInArray, 1);
  localStorage.setItem(LOCALSTORAGE_KEY_W, JSON.stringify(watchedId));
  setButtonWatchedSettings(false);
};

const removeFromQueue = () => {
  const elementIndexInArray = queueId.indexOf(idMovie);
  queueId.splice(elementIndexInArray, 1);
  localStorage.setItem(LOCALSTORAGE_KEY_Q, JSON.stringify(queueId));
  setButtonQueueSettings(false);
};

export { setButtonWatchedSettings, setButtonQueueSettings };

// const addToWatch = () => {
//   watchedId.push(idMovie);
//   localStorage.setItem(LOCALSTORAGE_KEY_W, JSON.stringify(watchedId));
//   setButtonWatchedSettings(true);
// };

// const addToQueue = () => {
//   queueId.push(idMovie);
//   localStorage.setItem(LOCALSTORAGE_KEY_Q, JSON.stringify(queueId));
//   setButtonQueueSettings(true);
// };

// const removeFromWatch = () => {
//   const elementIndexInArray = watchedId.indexOf(idMovie);
//   watchedId.splice(elementIndexInArray, 1);
//   localStorage.setItem(LOCALSTORAGE_KEY_W, JSON.stringify(watchedId));
//   setButtonWatchedSettings(false);
// };

// const removeFromQueue = () => {
//   const elementIndexInArray = queueId.indexOf(idMovie);
//   queueId.splice(elementIndexInArray, 1);
//   localStorage.setItem(LOCALSTORAGE_KEY_Q, JSON.stringify(queueId));
//   setButtonQueueSettings(false);
// };
