import { MovieApiService } from './api-movie-service';
import { createMarkupPlaylist } from './create-markup-playlist';
import { slickLoader } from './loader';

const videos = document.querySelector('.videos');

const newsWeekApiService = new MovieApiService();

export default async function loadPlayList() {
  document.querySelector('.footer').classList.add('visually-hidden');

  slickLoader();
  try {
    const categoryPlayList = await newsWeekApiService.fetchMovieForId();
    createMarkupPlaylist(categoryPlayList, videos);

    SlickLoader.disable();
    document.querySelector('.footer').classList.remove('visually-hidden');
  } catch (error) {
    console.log(error);
  }
}
