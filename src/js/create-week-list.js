const newsWeekApiService = new MovieApiService();

const videoList = document.querySelector('.videos');

document.addEventListener('DOMContentLoaded', ready);

function ready(e) {
  newsWeekApiService.fetchTrendWeekMovie().then(data => {
    insertContent(data.hits);
  });
}

// const createListItem = item =>
//   `
//  <div class="video anim" id="${item.id}" style="--delay: .4s">
//         <p class="video-selection">...</p>
//         <div class="video-wrapper">
//             <img class="video-poster" src="${item.poster_path}" alt="${
//     item.title
//   } />

//             <div class="rating__wrapper video-rating">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
//                     stroke-linejoin="round" class="feather feather-check">
//                     <path d="M20 6L9 17l-5-5" />
//                 </svg>
//                 <p class="rating-value">${
//                   item.vote_average ? item.vote_average : ''
//                 }</p>

//             </div>
//         </div>

//         <div class="video-name">${item.title ? item.title : ''}</div>
//         <div class="video-view">${
//           item.vote_count ? item.vote_count : ''
//         } views<span class="seperate video-seperate"></span>${
//     item.release_date ? item.release_date : ''
//   }</div>
//     </div>`;

// const generateContent = array =>
//   array ? array.reduce((acc, item) => acc + createListItem(item), '') : '';

// const insertContent = array => {
//   const result = generateContent(array);
//   videoList.insertAdjacentHTML('beforeend', result);
// };

// function clearGalleryContainer() {
//   refs.galleryContainer.innerHTML = '';
// }
