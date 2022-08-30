import { MovieApiService } from '../api-movie-service';
import { createMarkupMovies } from '../create-markup-movies';
import initPagination from '../helpers/pagination';
import scrollToTop from '../helpers/scroll-to-top';

const films = document.querySelector('.main-films');
const pageTitle = document.querySelector('.main-header');
const videos = document.querySelector('.videos');
const pageSubTitle = document.querySelector('.most-watched');
const inputSearch = document.querySelector('#search-box');

const saerchMovie = new MovieApiService();
let category = '';

export default async function handlerInput(e) {
  e.preventDefault();
  category = e.target.value.trim();
  let startPage = 1;

  if (category === '') {
    films.innerHTML = '';
    pageSubTitle.classList.add('visually-hidden');
    videos.innerHTML = '';
    pageTitle.classList.add('main-header__search-info');
    pageTitle.classList.add('main-header__search-accent');
    pageTitle.textContent = `Enter a search value`;
  }

  const result = await saerchMovie.fetchSearchMovie(category, startPage);

  if (result.results.length === 0) {
    films.innerHTML = '';
    pageSubTitle.classList.add('visually-hidden');
    videos.innerHTML = '';
    pageTitle.classList.add('main-header__search-info');
    pageTitle.classList.add('main-header__search-accent');
    pageTitle.textContent = `Oops! We didn't find: "${category}". Please try again.`;
  } else {
    const result = await saerchMovie.fetchSearchMovie(category, startPage);
    const { page, results, total_results: totalItems } = result;

    const pagination = initPagination({
      page,
      itemsPerPage: results.length,
      totalItems,
    });
    films.innerHTML = '';
    pageSubTitle.classList.add('visually-hidden');
    videos.innerHTML = '';
    pageTitle.classList.remove('main-header__search-accent');
    pageTitle.classList.add('main-header__search-info');
    pageTitle.textContent = `Are You search: "${category}"?`;
    createMarkupMovies(result.results, videos);
    scrollToTop();

    pagination.on('afterMove', async ({ page }) => {
      const result = await saerchMovie.fetchSearchMovie(category, page);

      films.innerHTML = '';
      pageSubTitle.classList.add('visually-hidden');
      videos.innerHTML = '';
      pageTitle.classList.remove('main-header__search-accent');
      pageTitle.classList.add('main-header__search-info');
      pageTitle.textContent = `Are You search: "${category}"?`;
      createMarkupMovies(result.results, videos);
      scrollToTop();
    });
  }
  inputSearch.value = '';
}
