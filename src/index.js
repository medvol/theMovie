
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
};

let mainPage = true;

if (!mainPage) {
  refs.mainContainer.classList.remove('videos');

}

window.addEventListener('resize', function () {
  if (window.innerWidth > 1279) {
    sidebar.classList.remove('collapse');
  } else {
    sidebar.classList.add('collapse');
  }
});


addEventListener('DOMContentLoaded', loadSidebarCategory, {
  once: true,
});



const refs = {
  openModal: document.querySelector('#js-team-modal'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('.js-backdrop')
}
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
  // mainPage = false;
  // refs.mainContainer.classList.add('videos')
  // refs.mainContainer.innerHTML = '';
  refs.videos.innerHTML = '';
  createMarkupMovies(ganres, refs.videos);

  console.log(ganres);
}
