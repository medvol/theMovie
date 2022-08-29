import { MovieApiService } from './api-movie-service';
import { createMarkupMovies } from './create-markup-movies';
import { slickLoader } from './loader';
import initPagination from './pagination';

const films = document.querySelector('.main-films');
const pageTitle = document.querySelector('.main-header');
const videos = document.querySelector('.videos');
const pageSubTitle = document.querySelector('.most-watched');

const categoryMovie = new MovieApiService();

export default async function onClickCategory(event) {
  const element = event.target.closest('li[data-id]');
  // document.querySelector('.footer').style.visibility = 'hidden'; // show
  // hide
  document.querySelector('.footer').classList.add('visually-hidden');

  const id = element.dataset.id;
  let startPage = 1
  
  videos.innerHTML = '';
  films.innerHTML = '';
  pageTitle.textContent = element.firstElementChild.textContent;
  pageSubTitle.classList.add('visually-hidden');

  slickLoader();
  
  const trending = await categoryMovie.fetchMoviesForGenres(id, startPage);
  SlickLoader.disable();
  const { page, results, total_results: totalItems } = trending;

  const pagination = initPagination({    
    page,
    itemsPerPage: results.length,
    totalItems,
    
  })
    createMarkupMovies(trending.results, videos);     
  document.querySelector('.footer').classList.remove('visually-hidden');
  
  pagination.on('afterMove', async ({ page }) => {
    slickLoader();
    const trending = await categoryMovie.fetchMoviesForGenres(id, page);
    SlickLoader.disable();

    films.innerHTML = '';
    pageSubTitle.classList.add('visually-hidden');
    videos.innerHTML = '';
    pageTitle.textContent = element.firstElementChild.textContent;
    createMarkupMovies(trending.results, videos);      

  });   
 

   
    // document.querySelector('.footer').style.visibility = 'visible';

}
