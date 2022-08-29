import { MovieApiService } from './api-movie-service';
import { createMarkupMovies } from './create-markup-movies';
import initPagination from './pagination';

const films = document.querySelector('.main-films');
const pageTitle = document.querySelector('.main-header');
const videos = document.querySelector('.videos');
const pageSubTitle = document.querySelector('.most-watched');

const categoryMovie = new MovieApiService();

export default async function onClickTrending(event) {
  const element = event.target.closest('li[data-name]');
  let startPage = 1
  const trending = await categoryMovie.fetchTrendWeekMovie(startPage);
  const { page, results, total_results: totalItems } = trending;

  const pagination = initPagination({    
      page,
      itemsPerPage: results.length,
      totalItems,
    
  })

    films.innerHTML = '';
    pageSubTitle.classList.add('visually-hidden');
    videos.innerHTML = '';
    pageTitle.textContent = element.firstElementChild.textContent;
    createMarkupMovies(trending.results, videos);


  pagination.on('afterMove', async ({ page }) => {
    const trending = await categoryMovie.fetchTrendWeekMovie(page);
 
    films.innerHTML = '';
    pageSubTitle.classList.add('visually-hidden');
    videos.innerHTML = '';
    pageTitle.textContent = element.firstElementChild.textContent;
    createMarkupMovies(trending.results, videos);

  });
  
}