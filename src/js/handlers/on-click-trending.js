import { MovieApiService } from '../api-movie-service';
import { createMarkupMovies } from '../create-markup-movies';
import initPagination from '../helpers/pagination';
import { slickLoader } from '../loader';
import { closeSignInForm } from '../submit-form';

const films = document.querySelector('.main-films');
const pageTitle = document.querySelector('.main-header');
const videos = document.querySelector('.videos');
const pageSubTitle = document.querySelector('.most-watched');

// const wrapperPlaylistBtn = document.querySelector('.wrapper-playlist_btn');

document.querySelector('.footer').classList.add('visually-hidden');

const categoryMovie = new MovieApiService();

export default async function onClickTrending(event) {
  const element = event.target.closest('li[data-name]');
  let startPage = 1;
  slickLoader();
  closeSignInForm();

  document
    .querySelector('.wrapper-playlist_btn')
    .classList.add('visually-hidden');

  const trending = await categoryMovie.fetchTrendWeekMovie(startPage);
  SlickLoader.disable();
  const { page, results, total_results: totalItems } = trending;

  const pagination = initPagination({
    page,
    itemsPerPage: results.length,
    totalItems,
  });

  films.innerHTML = '';
  pageSubTitle.classList.add('visually-hidden');
  videos.innerHTML = '';
  pageTitle.classList.remove('main-header__search-info');
  pageTitle.classList.remove('main-header__search-accent');
  pageTitle.textContent = element.firstElementChild.textContent;
  createMarkupMovies(trending.results, videos);

  document.querySelector('.footer').classList.remove('visually-hidden');

  pagination.on('afterMove', async ({ page }) => {
    slickLoader();
    const trending = await categoryMovie.fetchTrendWeekMovie(page);
    SlickLoader.disable();

    films.innerHTML = '';
    pageSubTitle.classList.add('visually-hidden');
    videos.innerHTML = '';
    pageTitle.classList.remove('main-header__search-info');
    pageTitle.classList.remove('main-header__search-accent');
    pageTitle.textContent = element.firstElementChild.textContent;
    createMarkupMovies(trending.results, videos);
  });
}
