import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCfgcI6WzwxWzinNafSwxBz5oDTrgZa6_s",
    authDomain: "mytaskapp-2b4cf.firebaseapp.com",
    databaseURL: "https://mytaskapp-2b4cf.firebaseio.com",
    projectId: "mytaskapp-2b4cf",
    storageBucket: "mytaskapp-2b4cf.appspot.com",
    messagingSenderId: "634039073954",
    appId: "1:634039073954:web:9b9356cfbea07568da2bfb",
    measurementId: "G-4FF762TKK0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore() //.settings({timestampsInSnapshots:true})


export default firebase;