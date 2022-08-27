import { MovieApiService } from "./api-movie-service";
import { createMarkupMovies } from "./create-markup-movies";

const videos = document.querySelector('.videos');

const newsWeekApiService = new MovieApiService();

export default async function loadMostWatchedList() {
  const categoryWeekList = await newsWeekApiService.fetchTrendWeekMovie();
  createMarkupMovies(categoryWeekList, videos);
}