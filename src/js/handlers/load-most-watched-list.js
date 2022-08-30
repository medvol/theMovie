
import { MovieApiService } from "../api-movie-service";
import { createMarkupMovies } from "../create-markup-movies";
import initPagination from "../helpers/pagination";
import { slickLoader } from '../loader';
import scrollToTop from "../helpers/scroll-to-top";


const videos = document.querySelector('.videos');
document.querySelector('.footer').classList.add('visually-hidden');

const newsWeekApiService = new MovieApiService();

export default async function loadMostWatchedList() {
  let startPage = 1
  slickLoader()
  const trending = await newsWeekApiService.fetchTrendWeekMovie(startPage);
   SlickLoader.disable();
  const { page, results, total_results: totalItems } = trending;
  createMarkupMovies(trending.results, videos);

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

