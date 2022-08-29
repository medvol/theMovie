import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './sass/index.scss';

import {
  onOpenModal,
  onCloseModal,
  // onBackdropClick,
} from './js/modal-our-team';

import {
  onBackdropClick,
  onPushEsc,
  onModalCloseBtn,
} from './js/modal-close-btn';

import { OnClickSidebar } from './js/on-click-active';
import loadSidebarCategory from './js/load-sigebar-category';
import loadMostWatchedList from './js/load-most-watched-list';
import onClickCategory from './js/on-click-category-list';
import onClickTrending from './js/on-click-trending';
import loadDiscoverCards from './js/load-discover-cards';
import handlerInput from './js/handler-search';
import loadPlayList from './js/load-playlist';
import { authUser } from './js/submit-form';
import './js/create-markup-playlist';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

import { MovieApiService } from './js/api-movie-service';
import { onModalShowInfoCard } from './js/on-modal-show-infocard';

import debounce from 'lodash.debounce';


const refs = {
  categoryList: document.querySelector('[data-list ="render"]'),
  mainContainer: document.querySelector('.main-container'),
  videos: document.querySelector('.videos'),
  sidebar: document.querySelector('.sidebar'),
  films: document.querySelector('.main-films'),
  pageTitle: document.querySelector('.main-header'),
  logo: document.querySelector('.logo-expand'),
  discover: document.querySelector('[data-name="discover"]'),
  trending: document.querySelector('[data-name="trending"]'),
  playlist: document.querySelector('[data-name="playlist"]'),
  openModal: document.querySelector('#js-team-modal'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('.js-backdrop'),

  pageSubTitle: document.querySelector('.most-watched'),
  searchBar: document.querySelector('.search-bar'),
  overlay: document.querySelector('.overlay'),
  modalCardMovie: document.querySelector('.modal_movie_card'),
  pageSubTitle: document.querySelector('.most-watched'),
  modalCloseBtn: document.querySelector('.close-btn-card'),
};


if (refs.pageTitle.textContent !== 'New video')
  refs.pageTitle.textContent = 'New video';

window.addEventListener('resize', function () {
  if (window.innerWidth > 1279) {
    refs.sidebar.classList.remove('collapse');
  } else {
    refs.sidebar.classList.add('collapse');
  }
});

refs.modalCloseBtn.addEventListener('click', onModalCloseBtn);

refs.openModal.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
refs.logo.addEventListener('click', loadMostWatchedList);
refs.playlist.addEventListener('click', loadPlayList);

refs.overlay.addEventListener('click', onBackdropClick);
document.addEventListener('keydown', onPushEsc);

addEventListener('DOMContentLoaded', loadSidebarCategory, { once: true });

addEventListener('DOMContentLoaded', loadMostWatchedList);

refs.categoryList.addEventListener('click', onClickCategory);

refs.trending.addEventListener('click', onClickTrending);

addEventListener('DOMContentLoaded', loadDiscoverCards);

refs.videos.addEventListener('click', onModalShowInfoCard);
refs.films.addEventListener('click', onModalShowInfoCard);

const DEBOUNCE_DELAY = 750;

refs.searchBar.addEventListener(
  'input',
  debounce(handlerInput, DEBOUNCE_DELAY)
);

// refs.mainContainer.addEventListener('click', onModalShowInfoCard);


var splide = new Splide('.splide', {
  perPage: 3,
  gap: '2rem',
  breakpoints: {
    640: {
      perPage: 2,
      gap: '.7rem',
      height: '6rem',
    },
    480: {
      perPage: 1,
      gap: '.7rem',
      height: '12rem',
    },
  },
});

splide.mount();

refs.sidebar.addEventListener('click', OnClickSidebar);

authUser();


refs.discover.addEventListener('click', function () {
  location.reload();
});

refs.logo.addEventListener('click', function () {
  location.reload();
});

