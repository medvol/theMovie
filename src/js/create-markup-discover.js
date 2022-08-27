export function createMarkupDiscoverCards(discoverMovies) {
  return discoverMovies
    .map(discoverMovie => {
      const { title, vote_average, release_date, vote_count, poster_path, id } =
        discoverMovie;
      const date = release_date ? release_date.slice(0, 4) : '&#128512';
      const average = vote_average ? vote_average.toFixed(1) : '&#128512';
      return `
    <div class="main-film  anim" id="${id}" style="--delay: .1s">
        <h2 class="main-film__title">${title}</h2>
        <div class="video-poster__wrapper">
          <img class="video-poster" src="https://image.tmdb.org/t/p/original${poster_path}" loading="lazy" alt="${title}" />
        </div>
        
        <div class="main-film__rating">
            <div class="rating__wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                    stroke-linejoin="round" class="feather feather-check">
                    <path d="M20 6L9 17l-5-5" />
                </svg>
                <p class="rating-value">${average}</p>
            </div>
            <div class="film-detail">
                <p class="film-ganre"></p>
                <p class="film-name"></p>
                <p class="film-info">${vote_count} views<span class="seperate"></span>${date}</p>
            </div>
        </div>
        <span class="main-film__selection">...</span>
    </div>`;
    })
    .join('');
}
