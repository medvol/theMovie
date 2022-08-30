export function createMarkupDiscoverCards(discoverMovies) {
  return discoverMovies
    .map(discoverMovie => {
      const {
        id,
        title,
        release_date,
        poster_path,
        name,
        vote_average,
        vote_count,
      } = discoverMovie;
      const date = release_date ? release_date.slice(0, 4) : '&#128512';
      const average = vote_average ? vote_average.toFixed(1) : '&#128512';
      const imgUrl = `https://image.tmdb.org/t/p`;

      return `
    <div class="main-film  anim" id="${id}" style="--delay: .1s">
        <h2 class="main-film__title">${title ? title : name}</h2>
        <div class="video-poster__wrapper">
          <img class="video-poster lazyload" src="${imgUrl}/w342${poster_path}"
           srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            data-srcset="${imgUrl}/w500${poster_path} 500w,            
            
            ${imgUrl}/w780${poster_path} 780w,
            ${imgUrl}/original${poster_path} 900w,"
            data-sizes="auto"   
           alt="${title}" />
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
