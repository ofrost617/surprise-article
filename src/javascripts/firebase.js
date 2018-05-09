// no need for script tags here because we're importing it using ES6 module syntax
import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyC8D3SwQ6lyrpsbQ29OtUovA8He_bD6L0Y",
  authDomain: "article-roulette.firebaseapp.com",
  databaseURL: "https://article-roulette.firebaseio.com",
  projectId: "article-roulette",
  storageBucket: "article-roulette.appspot.com",
  messagingSenderId: "1067162097756"
};
firebase.initializeApp(config);
export default firebase;

// any time we need to access firebase we just import it at the top of the file