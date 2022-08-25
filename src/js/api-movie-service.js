import axios from 'axios';
export class MovieApiService {
  constructor() {
    this.API_KEY = '5b00cd10e05c354cfbdbc23aa24fc7b8';
    this.URL = 'https://api.themoviedb.org/3/';

    this.searchQuary = '';
    this.page = 1;
    this.trendDay = 'day';
    this.trendWeek = 'week';
    this.movieId = null;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get search() {
    return this.searchQuary;
  }

  set search(newQuary) {
    this.searchQuary = newQuary;
  }

  // Запрос по названию
  fetchSearchMovie = async () => {
    try {
      const responce = await axios.get(
        `${this.URL}search/movie?api_key=${this.API_KEY}&query=${this.searchQuary}&language=en-US&page=1&include_adult=false&page=${this.page}`
      );
      return responce.data.results;
    } catch (error) {
      console.log(error);
    }
  };

  // Запрос тренд за день
  fetchTrendDayMovie = async () => {
    try {
      const responce = await axios.get(
        `${this.URL}trending/all/${this.trendDay}?api_key=${this.API_KEY}&page=${this.page}`
      );
      return responce.data.results;
    } catch (error) {
      console.log(error);
    }
  };

  // Запрос тренд за неделю
  fetchTrendWeekMovie = async () => {
    try {
      const responce = await axios.get(
        `${this.URL}trending/all/${this.trendWeek}?api_key=${this.API_KEY}&page=${this.page}`
      );
      return responce.data.results;
    } catch (error) {
      console.log(error);
    }
  };

  // Запрос по Id (информация о фильме)
  fetchMovieForId = async () => {
    try {
      const responce = await axios.get(
        `${this.URL}movie/${this.movieId}?api_key=${this.API_KEY}&language=en-US`
      );
      return responce.data;
    } catch (error) {
      console.log(error);
    }
  };

  // Запрос по жанрам
  fetchMoviesForGenres = async genre => {
    try {
      const responce = await axios.get(
        `${this.URL}discover/movie?with_genres=${genre}&page=${this.page}&with_original_language=en&api_key=${this.API_KEY}`
      );
      return responce.data.results;
    } catch (error) {
      console.log(error);
    }
  };

  // Запрос информации по жанрам
  fetchGenresDescription = async () => {
    try {
      const responce = await axios.get(
        `${this.URL}genre/movie/list?api_key=${this.API_KEY}`
      );
      return responce.data.genres;
    } catch (error) {
      console.log(error);
    }
  };
}
