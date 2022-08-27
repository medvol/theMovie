import './sass/index.scss';
import {
  onOpenModal,
  onCloseModal,
  onBackdropClick,
} from './js/modal-our-team';

import { onBackdropClick, onPushEsc } from './js/modal-close-btn';
import { OnClickSidebar } from './js/on-click-active';
import loadSidebarCategory from './js/load-sigebar-category';
import loadMostWatchedList from './js/load-most-watched-list';
import onClickCategory from './js/on-click-category-list';
import onClickTrending from './js/on-click-trending';
import loadDiscoverCards from './js/load-discover-cards';
import handlerInput from './js/handler-search';
import onModalShowInfoCard from './js/on-modal-show-info-card';

import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

import { MovieApiService } from './js/api-movie-service';
import debounce from 'lodash.debounce';




import { createMarkupMovieInfo } from './js/create-markup-modal-info';


// import './js/api-movie-service';
// import './js/modal-close-btn';
// import './js/modal-info-open';

import './js/pagination';



const refs = {
  categoryList: document.querySelector('[data-list ="render"]'),
  mainContainer: document.querySelector('.main-container'),
  videos: document.querySelector('.videos'),
  sidebar: document.querySelector('.sidebar'),
  films: document.querySelector('.main-films'),
  pageTitle: document.querySelector('.main-header'),
  trending: document.querySelector('[data-name="trending"]'),
  openModal: document.querySelector('#js-team-modal'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('.js-backdrop'),






  pageSubTitle: document.querySelector('.most-watched'),
  searchBar: document.querySelector('.search-bar'),
  overlay: document.querySelector('.overlay'),
  modalCardMovie: document.querySelector('.modal_movie_card'),
  pageSubTitle: document.querySelector('.most-watched'),

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

refs.openModal.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

// refs.modalCloseBtn.addEventListener('click', onModalCloseBtn);
refs.overlay.addEventListener('click', onBackdropClick);
document.addEventListener('keydown', onPushEsc);

addEventListener('DOMContentLoaded', loadSidebarCategory, { once: true });

const categoryMovie = new MovieApiService();


addEventListener('DOMContentLoaded', loadMostWatchedList);

refs.categoryList.addEventListener('click', onClickCategory);

refs.trending.addEventListener('click', onClickTrending);

addEventListener('DOMContentLoaded', loadDiscoverCards);

const DEBOUNCE_DELAY = 750;


refs.searchBar.addEventListener('input', debounce(handlerInput, DEBOUNCE_DELAY));

refs.mainContainer.addEventListener('click', onModalShowInfoCard);



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




import './sass/index.scss';
// import './js/api-movie-service';
import { MovieApiService } from './js/api-movie-service';
import { createCategoryList } from './js/sidebar-category';
import { createMarkupMovies } from './js/create-markup-movies';
import { createMarkupDiscoverCards } from './js/create-markup-discover';

import { authUser } from './js/submit-form';

import debounce from 'lodash.debounce';

import { createMarkupMovieInfo } from './js/create-markup-modal-info';




// async function onModalShowInfoCard(e) {
//   if (e.target.closest('[id]')) {
//     refs.overlay.classList.remove('is-hidden');
//   }
//   const element = e.target.closest('[id]');
//   categoryMovie.movieId = element.id;

//   const movieForId = await categoryMovie.fetchMovieForId();

//   refs.modalCardMovie.innerHTML = '';
//   createMarkupMovieInfo(movieForId, refs.modalCardMovie);
// }


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


addEventListener('DOMContentLoaded', loadSidebarCategory, {
  once: true,
});

refs.openModal.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

// refs.modalCloseBtn.addEventListener('click', onModalCloseBtn);
refs.overlay.addEventListener('click', onBackdropClick);
document.addEventListener('keydown', onPushEsc);

addEventListener('DOMContentLoaded', loadSidebarCategory, { once: true });

// const categoryMovie = new MovieApiService();

async function loadSidebarCategory() {
  const categoryMovieList = await categoryMovie.fetchGenresDescription();
  createCategoryList(categoryMovieList, refs.categoryList);
}

addEventListener('DOMContentLoaded', loadList);

const newsWeekApiService = new MovieApiService();

async function loadList() {
  const categoryWeekList = await newsWeekApiService.fetchTrendWeekMovie();
  createMarkupMovies(categoryWeekList, refs.videos);
}

refs.categoryList.addEventListener('click', onClickCategory);

async function onClickCategory(event) {
  const element = event.target.closest('li[data-id]');
  const id = element.dataset.id;
  const ganres = await categoryMovie.fetchMoviesForGenres(id);
  refs.films.innerHTML = '';
  refs.videos.innerHTML = '';
  refs.pageTitle.textContent = element.firstElementChild.textContent;

  refs.pageSubTitle.classList.add('visually-hidden');
  createMarkupMovies(ganres, refs.videos);

  createMarkupMovies(ganres, refs.videos);
}

refs.trending.addEventListener('click', onClickTrending);

async function onClickTrending(event) {
  const element = event.target.closest('li[data-name]');


  const trending = await categoryMovie.fetchTrendWeekMovie();
  refs.films.innerHTML = '';
  refs.pageSubTitle.classList.add('visually-hidden');
  refs.videos.innerHTML = '';
  refs.pageTitle.textContent = element.firstElementChild.textContent;
  createMarkupMovies(trending, refs.videos);
}

function appendMarkupDiscoverCards(MarcupDiscoverCards) {
  refs.films.insertAdjacentHTML('beforeend', MarcupDiscoverCards);
}

const discoverMovie = new MovieApiService();

async function loadDiscoverCards() {
  const result = await discoverMovie.fetchTrendDayMovie();
  const cutResult = result.slice(0, 2);
  console.log('cutResult: ', cutResult);

  refs.films.innerHTML = '';

  const resultDiscover = createMarkupDiscoverCards(cutResult);
  appendMarkupDiscoverCards(resultDiscover);
}

addEventListener('DOMContentLoaded', loadDiscoverCards);


// =========================
// const DEBOUNCE_DELAY = 500;
const saerchMovie = new MovieApiService();

async function handlerInput(e) {
  e.preventDefault();

  saerchMovie.search = e.target.value.trim();
  console.log(saerchMovie.search);

  if (saerchMovie.search === '') {
    refs.films.innerHTML = '';
    refs.pageSubTitle.classList.add('visually-hidden');
    refs.videos.innerHTML = '';
    refs.pageTitle.textContent = `Enter a search value`;
  }

  const result = await saerchMovie.fetchSearchMovie();

  if (result.length === 0) {
    refs.films.innerHTML = '';
    refs.pageSubTitle.classList.add('visually-hidden');
    refs.videos.innerHTML = '';
    refs.pageTitle.textContent = `Oops! We didn't find anything. Please try again.`;
  } else {
    console.log('result: ', result);
    refs.films.innerHTML = '';
    refs.pageSubTitle.classList.add('visually-hidden');
    refs.videos.innerHTML = '';
    refs.pageTitle.textContent = `Are You search: ${saerchMovie.search}?`;
    createMarkupMovies(result, refs.videos);
  }

}

refs.searchBar.addEventListener('input', debounce(handlerInput, DEBOUNCE_DELAY));

refs.mainContainer.addEventListener('click', onModalShowInfoCard);

async function onModalShowInfoCard(e) {
  if (e.target.closest('[id]')) {
    refs.overlay.classList.remove('is-hidden');
  }
  const element = e.target.closest('[id]');
  categoryMovie.movieId = element.id;

  const movieForId = await categoryMovie.fetchMovieForId();

  refs.modalCardMovie.innerHTML = '';
  createMarkupMovieInfo(movieForId, refs.modalCardMovie);
}

  /////////////AUTH_USER
authUser();
  //////////////////////




splide.mount();


refs.sidebar.addEventListener('click', OnClickSidebar)


