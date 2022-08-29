import { MovieApiService } from './api-movie-service';
import parseGanres from './parse-ganres';

const savedWatched = localStorage.getItem('watched-movies');
const parsedWatched = JSON.parse(savedWatched);
// console.log('watched-movies', parsedWatched);

// export function watchedId(parsedWatched) {
//   return parsedWatched.map;
// }

const savedQueued = localStorage.getItem('queued-movies');
const parsedQueued = JSON.parse(savedQueued);
// console.log('queued-movies', parsedQueued);

const categoryMovie = new MovieApiService();

export async function createMarkupPlaylist(movies) {
  const markup = movies.reduce(async (acc, idMovie) => {
    // console.log(idMovie);
    categoryMovie.movieId = idMovie;
    const movie = await categoryMovie.fetchMovieForId();
    // console.log(movie);
    const ganres = await categoryMovie.fetchGenresDescription();
    // console.log(ganres);
    const {
      id,
      title,
      release_date,
      poster_path,
      name,
      vote_average,
      vote_count,
    } = movie;
    // console.log(movie);
    const date = release_date ? release_date.slice(0, 4) : '&#128512';
    const average = vote_average ? vote_average.toFixed(1) : '&#128512';
    const imgUrl = `https://image.tmdb.org/t/p`;

    const ganresToString = parseGanres(movie.genres, ganres);

    return (
      acc +
      `<li class="video anim" id="${id}"style="--delay: .4s">
      <div class="video">
        <span class="video-selection">...</span>
        <div class="video-wrapper">
            <img class="video-poster lazyload" src="${imgUrl}/w342${poster_path}"
            srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            data-srcset="${imgUrl}/w500${poster_path} 500w,            
            ${imgUrl}/w342${poster_path} 342w,
            ${imgUrl}/w780${poster_path} 780w,
            ${imgUrl}/original${poster_path} 900w,"
            data-sizes="auto"            

            alt="${title}" />

            <div class="rating__wrapper video-rating">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                    stroke-linejoin="round" class="feather feather-check">
                    <path d="M20 6L9 17l-5-5" />
                </svg>
                <p class="rating-value">${average}</p>
            </div>
        </div>
        <div class="video-description">
          <p class="video-ganre">${ganresToString}</p>
          <p class="video-name">${title ? title : name}</p>
          <p class="video-view">${vote_count} views<span class="seperate video-seperate"></span>${date}</p>
        </div>
      </div>
    </li>`
    );
  }, '');
  console.log(markup);
  return markup;
}
//  element.insertAdjacentHTML('beforeend', markup);
