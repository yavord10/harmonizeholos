import * as firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyAhVevsAZyfIaL-wxJLTo7a5K2Gohgv1VI",
    authDomain: "harmonizeholos-a7843.firebaseapp.com",
    databaseURL: "https://harmonizeholos-a7843.firebaseio.com",
    projectId: "harmonizeholos-a7843",
    storageBucket: "harmonizeholos-a7843.appspot.com",
    messagingSenderId: "329521464619",
    appId: "1:329521464619:web:b01d22cd6be134643a716e",
    measurementId: "G-9NJWHP38Z0"
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;