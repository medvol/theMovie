import sprite from '../images/symbol-defs.svg';

export function createMarkupMovieInfo(
  {
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    runtime,
    title,
    overview,
    poster_path,
  },
  elem
) {
  const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  const genresList = genres.map(genre => genre.name).join(' / ');

  const markup = `<button class="close-btn" data-modal-close>
            <svg class="close-icon" width="11" height="11">
                <use href="${sprite}#icon-close"></use>
            </svg>
        </button>

        <div class="modal_poster">
                <img class="modal_poster__img" src="${imgUrl}" alt="${title}"/>
        </div>

        <div class="modal_info anim">
            <div class="wrapper_info">
            <h2 class="modal_info__title">${title}</h2>

                <div class="info_data anim" style="--delay: .1s">
                    <ul class="modal_info__list">
                        <li class="modal_info__item">Vote / Votes <span class="modal_info_render__item">${vote_average} / ${vote_count}</span></li>
                        <li class="modal_info__item">Popularity <span class="modal_info_render__item">${popularity}</span></li>
                        <li class="modal_info__item">Original Title <span class="modal_info_render__item">${original_title}</span></li>
                        <li class="modal_info__item">Genre <span class="modal_info_render__item">${genresList}</span></li>
                        <li class="modal_info__item">Duration <span class="modal_info_render__item">${runtime}</span></li>
                    </ul>
                </div>
            </div>

            <div class="wrapper_about anim" style="--delay: .2s">
            <h3 class="about__title">About</h3>
            <p class="about__description">${overview}</p>
            </div>

            <div class="wrapper_btn anim" style="--delay: .4s">
                <button class="modal_btn red btn_add" type="button">
                    REMOVE TO WATCHED
                </button>
              
                <button class="modal_btn btn_queue" type="button">
                    ADD TO QUEUE
                </button>
            </div>
            
        </div>`;

  elem.insertAdjacentHTML('beforeend', markup);
}
