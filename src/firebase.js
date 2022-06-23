import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgq2CNAWhndSk7qxNY1DAAg-B_5cKBCWQ",
  authDomain: "discord-clone-yt-d4f12.firebaseapp.com",
  projectId: "discord-clone-yt-d4f12",
  storageBucket: "discord-clone-yt-d4f12.appspot.com",
  messagingSenderId: "341688986024",
  appId: "1:341688986024:web:7206194960e4c394f4559d",
  measurementId: "G-VVLT217FEL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
