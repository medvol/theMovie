export 
function createMarkupMovies(movies, element) {
  const markup = movies.reduce((acc, movie) => {
    const { title, release_date, poster_path, vote_average } = movie;
    const date = release_date.slice(0, 4);
    const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`

    return acc + `<div class="video anim" style="--delay: .4s">
        <p class="video-selection">...</p>
        <div class="video-wrapper">
            <img class="video-poster" src="${imgUrl}" alt="${title}" />

            <div class="rating__wrapper video-rating">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                    stroke-linejoin="round" class="feather feather-check">
                    <path d="M20 6L9 17l-5-5" />
                </svg>
                <p class="rating-value">${vote_average}</p>

            </div>
        </div>

        <p class="video-name">${title}</p>
        <p class="video-view">54K views<span class="seperate video-seperate"></span>${date}</p>
    </div>`
  }, '')

  element.insertAdjacentHTML("beforeend", markup);
  
}