
// import Notiflix from "notiflix";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// const firebaseConfig = {
//   apiKey: "AIzaSyCxYVplY39hWeNnw2-6VFkKdND6Wfe_mE8",
//   authDomain: "filmoteka-3.firebaseapp.com",
//   projectId: "filmoteka-3",
//   storageBucket: "filmoteka-3.appspot.com",
//   messagingSenderId: "259717760467",
//   appId: "1:259717760467:web:d36f823e53d3b07c281b26",
//   measurementId: "G-6S71JM2DHE"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// const auth = getAuth(app);

// export function registration(email, password) {
    
//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {

//             const user = userCredential.user;
//           localStorage.setItem(`USER`, JSON.stringify(user));
//           return user;
//         }).catch(function (error) {
//             if (error.code === `auth/weak-password`) { return Notiflix.Notify.failure(`password is too short`) }
//             else if (error.code === `auth/email-already-in-use`) { return Notiflix.Notify.failure(`you are already registered`) }
//    console.log(error.code);
//    console.log(error.message);
// });
// };

// export function logIn(email, password) {
    
//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
   
//             const user = userCredential.user;
//           localStorage.setItem(`USER`, JSON.stringify(user));
//           console.log(user);
//           return user;
 
//         }).catch(function (error) {
//       if (error.code === `auth/user-not-found`) {return Notiflix.Notify.failure(`you need to singup`)}
//           else if (error.code === `auth/wrong-password`) { return Notiflix.Notify.failure(`wrong password`) }
//           else if (error.code === `auth/network-request-failed`) { return Notiflix.Notify.failure(`network request failed`) }
//    console.log(error.code);
//    alert(error.message);
// });
// };

// export function outUser() {
//   signOut(auth).then((res) => {
//     localStorage.removeItem(`USER`);
//     console.log(res);
//     return res;
// }).catch((error) => {

// });
// };

// export function ifUser() {
//     const user = localStorage.getItem(`USER`)
//   if (user) {
//     return JSON.parse(user)
//   } else {
// return
//   }

// };

// export function ifUser() {
//     onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//   } else {
// return
//   }
// });
// };


