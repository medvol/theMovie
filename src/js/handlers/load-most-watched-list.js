import { MovieApiService } from '../api-movie-service';
import { createMarkupMovies } from '../create-markup-movies';
import initPagination from '../helpers/pagination';
import { slickLoader } from '../loader';
import scrollToTop from '../helpers/scroll-to-top';

// import { onOpenSelect } from '../load-select-card';
import { createListSelector } from '../create-markup-select-menu';

const videos = document.querySelector('.videos');
document.querySelector('.footer').classList.add('visually-hidden');

const newsWeekApiService = new MovieApiService();

export default async function loadMostWatchedList() {
  let startPage = 1;
  slickLoader();
  const trending = await newsWeekApiService.fetchTrendWeekMovie(startPage);
  SlickLoader.disable();
  const { page, results, total_results: totalItems } = trending;
  createMarkupMovies(trending.results, videos);

  //======================
  // console.log('======');
  // const selectWrapper = document.querySelector('.select-wrapper');
  // const selectionSpan = document.querySelector('.video-selection');
  // const selectList = document.querySelector('.select_list');

  // console.log('selectionMenu', selectionSpan);
  // console.log('selectWrapper', selectWrapper);

  // selectionSpan.addEventListener('click', () => {
  //   console.log('!!!!!!');
  //   createListSelector(selectWrapper);
  //   selectList().classList.toggle('open');
  // });
  //=============================

  const pagination = initPagination({
    page,
    itemsPerPage: results.length,
    totalItems,
  });
  document.querySelector('.footer').classList.remove('visually-hidden');
  pagination.on('afterMove', async ({ page }) => {
    slickLoader();
    const trending = await newsWeekApiService.fetchTrendWeekMovie(page);
    SlickLoader.disable();
    videos.innerHTML = '';
    createMarkupMovies(trending.results, videos);
    scrollToTop();
  });
}
