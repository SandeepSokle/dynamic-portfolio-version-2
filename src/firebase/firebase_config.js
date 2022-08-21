// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { openSnackbar } from "../Redux/Snackbar/snackbarStore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjA-Z8gsgRGLWtciW_i3w5QKeXfeiyqY8",
  authDomain: "portfolio-v2-4e3e1.firebaseapp.com",
  projectId: "portfolio-v2-4e3e1",
  storageBucket: "portfolio-v2-4e3e1.appspot.com",
  messagingSenderId: "719615702788",
  appId: "1:719615702788:web:c6241ac2ce57afdbccc251",
  measurementId: "G-SFQV8S39CG"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
const storage = getStorage();
// console.log({ firebaseApp });

const auth = getAuth();

export const createUserWithEmailPassword = async (
  email,
  name,
  password,
  dispatch
) => {
  let user;
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    user = userCredential.user;
    if (!user) {
      // const errorCode = error.code;
      const errorMessage = "user not found";
      console.log(errorMessage);
    } else {
      await updateProfile(user, {
        displayName: name,
      });
      dispatch(openSnackbar("User Successfully Signup", "success"));
      return user;
    }
  } catch (err) {
    console.log(err.message);
    dispatch(openSnackbar(err.message, "error"));
  }
};

export const loginWithEmailPassword = async (email, password, dispatch) => {
  let user;
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    user = userCredential.user;

    if (!user) {
      // const errorCode = error.code;
      const errorMessage = "user not found";
      console.log(errorMessage);
    } else {
      return user;
    }
  } catch (err) {
    console.log(err.message);
    // alert(err.message);
    dispatch(openSnackbar(err.message, "error"));
  }
};

// module.exports = {
//   storage,
//   loginWithEmailPassword
// }

export const loginOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

//google login auth

const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  let user;
  try {
    let userCredential = await signInWithPopup(auth, provider);

    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(userCredential);
    const token = credential.accessToken;
    // The signed-in user info.
    user = userCredential.user;
    if (!user) {
      // const errorCode = error.code;
      const errorMessage = "user not found";
      console.log(errorMessage);
    } else {
      return user;
    }
    // ...

    // .catch((error) => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.customData.email;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   // ...
    // });
  } catch (err) {
    console.log(err.message);
  }
};
