import { MovieApiService } from './api-movie-service';
import { createMarkupMovies } from './create-markup-movies';

const films = document.querySelector('.main-films');
const pageTitle = document.querySelector('.main-header');
const videos = document.querySelector('.videos');
const pageSubTitle = document.querySelector('.most-watched');
const inputSearch = document.querySelector('#search-box');
console.log('inputSearch: ', inputSearch);

const saerchMovie = new MovieApiService();

export default async function handlerInput(e) {
  e.preventDefault();
  saerchMovie.search = e.target.value.trim();

  if (saerchMovie.search === '') {
    films.innerHTML = '';
    pageSubTitle.classList.add('visually-hidden');
    videos.innerHTML = '';
    pageTitle.classList.add('main-header__search-info');
    pageTitle.classList.add('main-header__search-accent');
    pageTitle.textContent = `Enter a search value`;
  }

  const result = await saerchMovie.fetchSearchMovie();

  if (result.length === 0) {
    films.innerHTML = '';
    pageSubTitle.classList.add('visually-hidden');
    videos.innerHTML = '';
    pageTitle.classList.add('main-header__search-info');
    pageTitle.classList.add('main-header__search-accent');
    pageTitle.textContent = `Oops! We didn't find: "${saerchMovie.search}". Please try again.`;
    // inputSearch.value = '';
  } else {
    films.innerHTML = '';
    pageSubTitle.classList.add('visually-hidden');
    videos.innerHTML = '';
    pageTitle.classList.remove('main-header__search-accent');
    pageTitle.classList.add('main-header__search-info');
    pageTitle.textContent = `Are You search: "${saerchMovie.search}"?`;
    createMarkupMovies(result, videos);
    // inputSearch.value = '';
  }
  inputSearch.value = '';
}

// import { MovieApiService } from './api-movie-service';
// import { createMarkupMovies } from './create-markup-movies';

// const films = document.querySelector('.main-films');
// const pageTitle = document.querySelector('.main-header');
// const videos = document.querySelector('.videos');
// const pageSubTitle = document.querySelector('.most-watched');

// const saerchMovie = new MovieApiService();

// export default async function handlerInput(e) {
//   e.preventDefault();
//   saerchMovie.search = e.target.value.trim();

//   if (saerchMovie.search === '') {
//     films.innerHTML = '';
//     pageSubTitle.classList.add('visually-hidden');
//     videos.innerHTML = '';
//     pageTitle.textContent = `Enter a search value`;
//   }

//   // const result = await saerchMovie.fetchSearchMovie();

//   // if (result.length === 0) {
//   //   films.innerHTML = '';
//   //   pageSubTitle.classList.add('visually-hidden');
//   //   videos.innerHTML = '';
//   //   pageTitle.textContent = `Oops! We didn't find anything. Please try again.`;
//   // } else {

//   //   films.innerHTML = '';
//   //   pageSubTitle.classList.add('visually-hidden');
//   //   videos.innerHTML = '';
//   //   pageTitle.textContent = `Are You search: ${saerchMovie.search}?`;
//   //   createMarkupMovies(result, videos);
//   // }

//   slickLoader();
//   try {
//     const result = await saerchMovie.fetchSearchMovie();

//     if (result.length === 0) {
//       films.innerHTML = '';
//       pageSubTitle.classList.add('visually-hidden');
//       videos.innerHTML = '';
//       pageTitle.textContent = `Oops! We didn't find anything. Please try again.`;
//     } else {
//       films.innerHTML = '';
//       pageSubTitle.classList.add('visually-hidden');
//       videos.innerHTML = '';
//       pageTitle.textContent = `Are You search: ${saerchMovie.search}?`;
//       createMarkupMovies(result, videos);
//     }

//     // const ganres = await categoryMovie.fetchMoviesForGenres(id);

//     // createMarkupMovies(ganres, videos);
//     SlickLoader.disable();
//   } catch (error) {
//     console.log(error);
//   }
// }
