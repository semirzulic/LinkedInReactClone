import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFqql91zrZe-DN30Yyw1ktXuMXOjGA9kk",
  authDomain: "linkedin-clone-bd3b9.firebaseapp.com",
  projectId: "linkedin-clone-bd3b9",
  storageBucket: "linkedin-clone-bd3b9.appspot.com",
  messagingSenderId: "756371624744",
  appId: "1:756371624744:web:cfa65f2debbf13ec95761d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = getAuth(app);

export { db, auth };