
import './sass/index.scss'
import { onOpenModal, onCloseModal, onBackdropClick } from './js/modal-our-team';

import './sass/index.scss';
// import './js/api-movie-service';
import { MovieApiService } from './js/api-movie-service';
import { createCategoryList } from './js/sidebar-category';
import { createMarkupMovies } from './js/create-markup-movies';


// import './js/api-movie-service';
// import './js/modal-close-btn';
// import './js/modal-info-open';


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
  backdrop: document.querySelector('.js-backdrop')
};

if(refs.pageTitle.textContent !=='New video') refs.pageTitle.textContent = "New video"


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



refs.openModal.addEventListener('click', onOpenModal)
refs.closeModalBtn.addEventListener('click', onCloseModal)
refs.backdrop.addEventListener('click', onBackdropClick)

addEventListener('DOMContentLoaded', loadSidebarCategory, { once: true });


const categoryMovie = new MovieApiService();

async function loadSidebarCategory() {
  const categoryMovieList = await categoryMovie.fetchGenresDescription();
  // console.log(categoryMovieList);
  createCategoryList(categoryMovieList, refs.categoryList);
}

addEventListener('DOMContentLoaded', loadList);

const newsWeekApiService = new MovieApiService();

async function loadList() {
  const categoryWeekList = await newsWeekApiService.fetchTrendWeekMovie();
  console.log(categoryWeekList);
  createMarkupMovies(categoryWeekList, refs.videos);
}

refs.categoryList.addEventListener('click', onClickCategory);

async function onClickCategory(event) {
  const element = event.target.closest('li[data-id]');
  const id = element.dataset.id;
  const ganres = await categoryMovie.fetchMoviesForGenres(id);   
  refs.films.innerHTML = '';
  refs.videos.innerHTML = '';
  refs.pageTitle.textContent = element.firstElementChild.textContent
  createMarkupMovies(ganres, refs.videos)

}

refs.trending.addEventListener('click', onClickTrending)

async function onClickTrending(event) {
  const element = event.target.closest("li[data-name]");
  console.log(element)

  const trending = await categoryMovie.fetchTrendWeekMovie()
  refs.films.innerHTML = '';
  refs.videos.innerHTML = '';
  refs.pageTitle.textContent = element.firstElementChild.textContent
  createMarkupMovies(trending, refs.videos)

}
