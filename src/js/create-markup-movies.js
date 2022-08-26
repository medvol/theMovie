export function createMarkupMovies(movies, element) {
  const markup = movies.reduce((acc, movie) => {
    const {
      id,
      title,
      release_date,
      poster_path,
      name,
      vote_average,
      vote_count,
    } = movie;
    const date = release_date ? release_date.slice(0, 4) : '-';
    const average = vote_average ? vote_average.toFixed(1) : '-';
    const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

    return (
      acc +
      `<li class="video anim" id="${id}"style="--delay: .4s">
      <div class="video">
        <span class="video-selection">...</span>
        <div class="video-wrapper">
            <img class="video-poster" src="${imgUrl}" alt="${title}" />

            <div class="rating__wrapper video-rating">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                    stroke-linejoin="round" class="feather feather-check">
                    <path d="M20 6L9 17l-5-5" />
                </svg>
                <p class="rating-value">${average}</p>
            </div>
        </div>
        <div class="video-description">
          <p class="video-name">${title ? title : name}</p>
          <p class="video-view">${vote_count} views<span class="seperate video-seperate"></span>${date}</p>
        </div>
      </div>
    </li>`
    );
  }, '');

  element.insertAdjacentHTML('beforeend', markup);
}
