import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDeGXzhqN84cTisdCH8hS1AmP8vYuN4ELI",
  authDomain: "casamento-paty.firebaseapp.com",
  projectId: "casamento-paty",
  storageBucket: "casamento-paty.appspot.com",
  messagingSenderId: "258411643380",
  appId: "1:258411643380:web:3aad272430312af6c5f9a1"
};


initializeApp(firebaseConfig);

const db = getFirestore();

export default db