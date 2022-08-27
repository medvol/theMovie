import { MovieApiService } from "./api-movie-service";
import { createCategoryList } from "./sidebar-category";

const categoryList = document.querySelector('[data-list ="render"]')

const categoryMovie = new MovieApiService();

export default async function loadSidebarCategory() {
  const categoryMovieList = await categoryMovie.fetchGenresDescription();
  createCategoryList(categoryMovieList, categoryList);
}
