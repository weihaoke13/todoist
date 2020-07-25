import firebase from 'firebase/app';
import 'firebase/firestore';




const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBnbF1Qvl0l7nEHd63bHoEcOwFZqJb3l14",
    authDomain: "todoist-6d47d.firebaseapp.com",
    databaseURL: "https://todoist-6d47d.firebaseio.com",
    projectId: "todoist-6d47d",
    storageBucket: "todoist-6d47d.appspot.com",
    messagingSenderId: "60649032030",
    appId: "1:60649032030:web:4a8f20d20ed77b634ee7cf"
});

export { firebaseConfig as firebase};