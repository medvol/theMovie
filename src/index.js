import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './sass/index.scss';

import {
  onOpenModal,
  onCloseModal,
} from './js/modal-our-team';

import {
  onBackdropClick,
  onPushEsc,
  onModalCloseBtn,
} from './js/modal-close-btn';

import loadMostWatchedList from './js/handlers/load-most-watched-list';
import loadDiscoverCards from './js/load-discover-cards';
import handlerInput from './js/handlers/handler-search';
import loadPlayList from './js/load-playlist';
import { authUser } from './js/submit-form';
import './js/create-markup-playlist';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

import { onModalShowInfoCard } from './js/on-modal-show-infocard';

import debounce from 'lodash.debounce';
import './js/helpers/resize-window';
import './js/helpers/resize-sidebar';
import './js/common/refs';
import './js/render-pages'


refs.playlist.addEventListener('click', loadPlayList);


addEventListener('DOMContentLoaded', loadDiscoverCards);

refs.videos.addEventListener('click', onModalShowInfoCard);
refs.films.addEventListener('click', onModalShowInfoCard);

const DEBOUNCE_DELAY = 750;

refs.searchBar.addEventListener(
  'input',
  debounce(handlerInput, DEBOUNCE_DELAY)
);

// refs.mainContainer.addEventListener('click', onModalShowInfoCard);

refs.modalCloseBtn.addEventListener('click', onModalCloseBtn);
refs.openModal.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
refs.overlay.addEventListener('click', onBackdropClick);
document.addEventListener('keydown', onPushEsc);


var splide = new Splide('.splide', {
  perPage: 3,
  gap: '1rem',
  breakpoints: {
    640: {
      perPage: 2,
      gap: '.2rem',
      height: '6rem',
    },
    480: {
      perPage: 1,
      gap: '.1rem',
      height: '12rem',
    },
  },
});

splide.mount();

authUser();

refs.discover.addEventListener('click', function () {
  location.reload();
});

refs.logo.addEventListener('click', function () {
  location.reload();
});

