import './sass/index.scss';
import {
  onOpenModal,
  onCloseModal,
  onBackdropClick,
} from './js/modal-our-team';

import {
  onBackdropClick,
  onPushEsc,
  onModalCloseBtn,
} from './js/modal-close-btn';

import './sass/index.scss';
// import './js/api-movie-service';
import { MovieApiService } from './js/api-movie-service';
import { createCategoryList } from './js/sidebar-category';
import { createMarkupMovies } from './js/create-markup-movies';
import { createMarkupDiscoverCards } from './js/create-markup-discover';
import { onModalShowInfoCard } from './js/on-modal-show-infocard';

// import './js/pagination';

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

const categoryMovie = new MovieApiService();

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
  console.log(element);

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

refs.videos.addEventListener('click', onModalShowInfoCard);
refs.films.addEventListener('click', onModalShowInfoCard);
