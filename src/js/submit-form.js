import { async } from "@firebase/util";
import { registration, logIn, ifUser, outUser } from "./api-firebase-submit";
import { formMarcupCreator } from './singin_form-creator';
// import { createMarkupMovies } from '../js/create-markup-movies';


const refs = {
//   categoryList: document.querySelector('[data-list ="render"]'),
    mainContainer: document.querySelector('.main-container'),
//   videos: document.querySelector('.videos'),
//   openModal: document.querySelector('#js-team-modal'),
//   closeModalBtn: document.querySelector('[data-modal-close]'),
//   backdrop: document.querySelector('.js-backdrop'),
    singInBtn: document.querySelector(`.singin_btn`),
    
};


export function authUser() {
    if (ifUser() === undefined) {
        console.log(ifUser())
  return ifUserOff()
  } else {
    console.log(ifUser())
  return ifUserOn()
}
  
};

function ifUserOff() {
    refs.singInBtn.textContent = `SingIn`;
  refs.singInBtn.style.backgroundColor = `#ea5f5f`;
  refs.singInBtn.addEventListener('click', onClickSingIn);
};

function ifUserOn() {
 refs.singInBtn.textContent = `SingOut`;
  refs.singInBtn.style.backgroundColor = `#353340`;
  refs.singInBtn.addEventListener('click', onClickSingOut);
}

function onClickSingOut() {
    console.log(`lnvlasfnv`)
    outUser();
    authUser(); 
};
    
function onClickSingIn() {
 
 const formMarcup =  formMarcupCreator(refs.mainContainer);

    const forms =  {
        formLogin: document.querySelector(`.form-login`),
        formSignup: document.querySelector(`.form-signup`),
    };

   forms.formLogin.addEventListener(`submit`, onSubmitLogin);
   forms.formSignup.addEventListener(`submit`, onSubmitSingup);
    
};

async function  onSubmitLogin(e) {
  e.preventDefault()
  const data = new FormData(this);
  const email = data.get(`email`);
  const password = data.get(`password`);
  console.log(email, password);
  
    const log = await logIn(email, password)
    authUser();
 
};

async function onSubmitSingup(e) {
  e.preventDefault()
  const data = new FormData(this);
  const email = data.get(`email`);
  const password = data.get(`password`);
  const passwordRepeat = data.get(`password_repeat`);

  if(password !== passwordRepeat) {return Notiflix.Notify.failure(`password problem`) }
  console.log(email, password)
  
   await registration(email, password)
    authUser();
};