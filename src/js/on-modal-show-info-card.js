import { MovieApiService } from "./api-movie-service";
import { createMarkupMovieInfo } from "./create-markup-modal-info";

const overlay = document.querySelector('.overlay');
const modalCardMovie = document.querySelector('.modal_movie_card');

const categoryMovie = new MovieApiService();

export default async function onModalShowInfoCard(e) {
  if (e.target.closest('[id]')) {
    overlay.classList.remove('is-hidden');
  }
  const element = e.target.closest('[id]');
  categoryMovie.movieId = element.id;

  const movieForId = await categoryMovie.fetchMovieForId();

  modalCardMovie.innerHTML = '';
  createMarkupMovieInfo(movieForId, modalCardMovie);
}
