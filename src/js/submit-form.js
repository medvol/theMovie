// import { async } from "@firebase/util";
// import { registration, logIn, ifUser, outUser } from "./api-firebase-submit";
// import loadMostWatchedList from './load-most-watched-list';
// import loadDiscoverCards from './load-discover-cards';
// import { createMarkupMovies } from '../js/create-markup-movies';
import { formMarcupCreator } from './singin_form-creator';
import Notiflix from "notiflix";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCxYVplY39hWeNnw2-6VFkKdND6Wfe_mE8",
  authDomain: "filmoteka-3.firebaseapp.com",
  projectId: "filmoteka-3",
  storageBucket: "filmoteka-3.appspot.com",
  messagingSenderId: "259717760467",
  appId: "1:259717760467:web:d36f823e53d3b07c281b26",
  measurementId: "G-6S71JM2DHE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);

const refs = {
//   categoryList: document.querySelector('[data-list ="render"]'),
//   backdrop: document.querySelector('.js-backdrop'),
  singInBtn: document.querySelector(`.singin_btn`),
  newVideo: document.querySelector(`.main-header`),
  films: document.querySelector(`.main-films`),
  mostWached: document.querySelector(`.most-watched`),
  videos: document.querySelector('.videos'),
  mainContainer: document.querySelector('.main-container'),
    
    
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
  console.log(`off`)
};

function ifUserOn() {
 refs.singInBtn.textContent = `SingOut`;
  refs.singInBtn.style.backgroundColor = `#353340`;
  refs.singInBtn.addEventListener('click', onClickSingOut);
  console.log(`on`)
}

function onClickSingIn() {
  marcupClear();
  formMarcupCreator(refs.mainContainer);

    const forms =  {
        formLogin: document.querySelector(`.form-login`),
        formSignup: document.querySelector(`.form-signup`),
    };

   forms.formLogin.addEventListener(`submit`, onSubmitLogin);
   forms.formSignup.addEventListener(`submit`, onSubmitSingup);
    
};

async function  onSubmitLogin(e) {
  e.preventDefault();
  
  const data = new FormData(this);
  const email = data.get(`email`);
  const password = data.get(`password`);
  console.log(email, password);
  
  const log = await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
   
            const user = userCredential.user;
          localStorage.setItem(`USER`, JSON.stringify(user));
          console.log(user);
          return user;
 
        }).catch(function (error) {
      if (error.code === `auth/user-not-found`) {return Notiflix.Notify.failure(`you need to singup`)}
          else if (error.code === `auth/wrong-password`) { return Notiflix.Notify.failure(`wrong password`) }
          else if (error.code === `auth/network-request-failed`) { return Notiflix.Notify.failure(`network request failed`) }
   console.log(error.code);
   alert(error.message);
        });
  if (log) {
authUser();
location.reload();
  }
  
};


async function onSubmitSingup(e) {
  e.preventDefault()
  const data = new FormData(this);
  const email = data.get(`email`);
  const password = data.get(`password`);
  const passwordRepeat = data.get(`password_repeat`);

  if(password !== passwordRepeat) {return Notiflix.Notify.failure(`password problem`) }
  console.log(email, password)
  
  const log = await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
          localStorage.setItem(`USER`, JSON.stringify(user));
          return user;
        }).catch(function (error) {
            if (error.code === `auth/weak-password`) { return Notiflix.Notify.failure(`password is too short`) }
            else if (error.code === `auth/email-already-in-use`) { return Notiflix.Notify.failure(`you are already registered`) }
   console.log(error.code);
   console.log(error.message);
});
  if (log) {
   authUser();
  location.reload();
 }
};

async function onClickSingOut() {
    console.log(`lnvlasfnv`)
  const out = await signOut(auth).then((res) => {
    localStorage.removeItem(`USER`);
    console.log(res);
    return res;
  }).then(() => {
    authUser();
    location.reload();
  })
    .catch((error) => {

});
  
};
    
function marcupClear() {
  refs.mainContainer.innerHTML = ``;
};

function ifUser() {
    const user = localStorage.getItem(`USER`)
  if (user) {
    return JSON.parse(user)
  } else {
return
  }

};

// function containerMacup() {
//   refs.mainContainer.innerHTML = `<h1 class="main-header anim" style="--delay: 0s">Discover</h1>
//             <div class="main-films"></div>
            
//             <h2 class="most-watched anim" style="--delay: 0.3s">Most Watched</h2>

//             <ul class="videos"></ul>

//             <div class="pagination"></div>

//             <include src="./partials/footer.html"></include> `;
//    loadMostWatchedList();
//   loadDiscoverCards();
// };