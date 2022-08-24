// Get an API key for your demos at https://unsplash.com/developers
const unsplashID = 'yHGegvXIIuaProGojlpwY6yQWVg7CdBq8JAevyccsRA';

let container = document.querySelector('.container');

// window.addEventListener('scroll', onScroll);

// function onScroll() {
let infScroll = new InfiniteScroll(container, {
  path: function () {
    return `https://api.unsplash.com/photos?client_id=${unsplashID}&page=${this.pageIndex}`;
  },
  // load response as JSON
  responseBody: 'json',
  status: '.scroll-status',
  history: false,
});

// use element to turn HTML string into elements
let proxyElem = document.createElement('div');

infScroll.on('load', function (body) {
  // compile body data into HTML
  const itemsHTML = body.map(getItemHTML).join('');
  // convert HTML string into elements
  proxyElem.innerHTML = itemsHTML;
  // append item elements
  container.append(...proxyElem.children);
});

// load initial page
infScroll.loadNextPage();

// }

//------------------//

function getItemHTML({ user, urls }) {
  return `<div class="photo-item">
    <img class="photo-item__image" src="${urls.regular}" alt="Photo by ${user.name}" />
    <p class="photo-item__caption">
      <a href="${user.links.html}?utm_source=infinite-scroll-demos&utm_medium=referral&utm_campaign=api-credit">${user.name}</a>
    </p>
  </div>`;
}
