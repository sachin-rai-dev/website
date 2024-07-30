import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC3Qizx6XQIJqe9fUmTltmiKaTWIVP2MEc",
  authDomain: "webgenn-9f127.firebaseapp.com",
  projectId: "webgenn-9f127",
  storageBucket: "webgenn-9f127.appspot.com",
  messagingSenderId: "185622783080",
  appId: "1:185622783080:web:b4fdee2458ff3657f947dd",
  measurementId: "G-8JEJYXTH3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export let db = getFirestore(app)
 export const storage = getStorage(app);
