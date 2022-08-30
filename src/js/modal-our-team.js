import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import sergey from '../images/sergey.jpg'

const onBackdrop = document.querySelector('[data-modal]')
const footerBtnText = document.querySelector('.footer-btn-text')
const closeModalBtn = document.querySelector('[data-action="data-modal-close"]')



function onOpenModal() {
  window.addEventListener('keydown', closeModalByEsc);
  createListOurTeam()
  onBackdrop.classList.remove('is-hiddene');
  footerBtnText.classList.toggle('footer-btn-text-click')
  var splide = new Splide('.splide', {
    type: 'loop',
    padding: '15rem',
    gap: '2rem',
    cloneStatus: 'false',
    breakpoints: {
      640: {
        perPage: 2,
        gap: '.2rem',
        height: '6rem',
      },
      480: {
        destroy: true,
      },
    },
  });

  splide.mount();

}

function createListOurTeam() {
  const markup = `<div class="modal"><h1 class="title-team">Our Team</h1>
    <section class="splide">
      <div class="splide__track">
        <ul class="team-list splide__list">
          <li class="our-team splide__slide">
            <div class="picture">
              <a href="https://github.com/Stavr101" target="_blank"
                ><img
                  class="img-fluid"
                  src="${sergey}"
                  alt="avatar"
              /></a>
            </div>
            <div class="team-content">
              <h3 class="name">Sergey Shishkin</h3>
              <h4 class="title">Team Lead</h4>
            </div>
          </li>
          <li class="our-team splide__slide">
            <div class="picture">
              <a href="https://github.com/Stavr101" target="_blank"
                ><img
                  class="img-fluid"
                  src="https://avatars.githubusercontent.com/u/95885361?v=4"
                  alt="avatar"
              /></a>
            </div>
            <div class="team-content">
              <h3 class="name">Taras Zagamula</h3>
              <h4 class="title">Scrum Master</h4>
            </div>
          </li>
          <li class="our-team splide__slide">
            <div class="picture">
              <a href="https://github.com/TarasZagamula" target="_blank"
                ><img
                  class="img-fluid"
                  src="/src/images/viktoria.jpg"
                  alt="avatar"
              /></a>
            </div>
            <div class="team-content">
              <h3 class="name">Viktoriia Plotitsyna</h3>
              <h4 class="title">Developer</h4>
            </div>
          </li>
          <li class="our-team splide__slide">
            <div class="picture">
              <a href="https://github.com/RuslanShyrogorov" target="_blank"
                ><img
                  class="img-fluid"
                  src="/src/images/ruslan.jpg"
                  alt="avatar"
              /></a>
            </div>
            <div class="team-content">
              <h3 class="name">Ruslan Shyrogorov</h3>
              <h4 class="title">Developer</h4>
            </div>
          </li>
          <li class="our-team splide__slide">
            <div class="picture">
              <a href="https://github.com/medvol" target="_blank"
                ><img
                  class="img-fluid"
                  src="https://avatars.githubusercontent.com/u/95881208?v=4"
                  alt="avatar"
              /></a>
            </div>
            <div class="team-content">
              <h3 class="name">Oleh Medvid</h3>
              <h4 class="title">Developer</h4>
            </div>
          </li>
          <li class="our-team splide__slide">
            <div class="picture">
              <a href="https://github.com/Marryalex" target="_blank"
                ><img
                  class="img-fluid"
                  src="/src/images/mariia.jpg"
                  alt="avatar"
              /></a>
            </div>
            <div class="team-content">
              <h3 class="name">Maria Tymofiichuk</h3>
              <h4 class="title">Developer</h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <button type="button" class="close-btn" data-action="data-modal-close">
      <svg class="close-icon" width="11" height="11">
        <use href="images/symbol-defs.svg#icon-close"></use>
      </svg>
    </button>
    </div>`
  onBackdrop.insertAdjacentHTML('beforeend', markup)
}

// closeModalBtn.addEventListener('click', onCloseModal);

function onCloseModal() {
  footerBtnText.classList.toggle('footer-btn-text-click')
  onBackdrop.classList.add('is-hiddene');
}


function closeModalByEsc(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}
export { onOpenModal, onCloseModal, closeModalByEsc };

