import { MovieApiService } from "./api-movie-service";
import { createMarkupMovies } from "./create-markup-movies";
import initPagination from './pagination';

const videos = document.querySelector('.videos');
// const paginationContainer = `<div id="pagination" class="tui-pagination"></div>`

const newsWeekApiService = new MovieApiService();

export default async function loadMostWatchedList() {
  
  let startPage = 1
  const trending = await newsWeekApiService.fetchTrendWeekMovie(startPage);
  const { page, results, total_results: totalItems } = trending;
  createMarkupMovies(trending.results, videos);
  // videos.insertAdjacentHTML('afterend', paginationContainer)

  const pagination = initPagination({
    page,
    itemsPerPage: results.length,
    totalItems,
    
  });
  
  
  
  pagination.on('afterMove', async ({ page }) => {
    const trending = await newsWeekApiService.fetchTrendWeekMovie(page);    
    videos.innerHTML = '';    
    createMarkupMovies(trending.results, videos);

  });
  
}