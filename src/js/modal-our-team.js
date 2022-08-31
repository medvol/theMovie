import sergey from "../images/sergey.jpg"
import viktoria from "../images/viktoria.jpg"
import ruslan from "../images/ruslan.jpg"
import oleg from "../images/oleg.jpg"
import mariia from "../images/mariia.jpg"
import taras from "../images/taras.jpg"


const onBackdrop = document.querySelector('[data-modal]')
const footerBtnText = document.querySelector('.footer-btn-text')
const onBackdropModal = document.querySelector('.modal')
// const closeModalBtn = document.querySelector('[data-action="data-modal-close"]')



function openModalOn() {
  window.addEventListener('keydown', closeModalByEsc);
  createListOurTeam()
  onBackdrop.classList.remove('is-hiddene');
  onBackdropModal.classList.remove('is-hiddene')
  footerBtnText.classList.toggle('footer-btn-text-click')

}

function createListOurTeam() {
  const markup = `<section class="splide">
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
                  src="${taras}"
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
                  src="${viktoria}"
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
                  src="${ruslan}"
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
                  src="${oleg}"
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
                  src="${mariia}"
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
    </section>`
  onBackdropModal.insertAdjacentHTML('beforeend', markup)
}

function onCloseModal() {
  footerBtnText.classList.toggle('footer-btn-text-click');
  onBackdrop.classList.add('is-hiddene');
  onBackdropModal.classList.add('is-hiddene');
}


function closeModalByEsc(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}
export { openModalOn, onCloseModal, closeModalByEsc };

