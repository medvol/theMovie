import { MovieApiService } from './api-movie-service';
import { createMarkupMovies } from './create-markup-movies';
import { slickLoader } from './loader';

const videos = document.querySelector('.videos');

const newsWeekApiService = new MovieApiService();

export default async function loadMostWatchedList() {
  document.querySelector('.footer').classList.add('visually-hidden');

  slickLoader();
  try {
    const categoryWeekList = await newsWeekApiService.fetchTrendWeekMovie();
    createMarkupMovies(categoryWeekList, videos);

    SlickLoader.disable();
    document.querySelector('.footer').classList.remove('visually-hidden');
  } catch (error) {
    console.log(error);
  }
}
