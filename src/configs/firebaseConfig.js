import { initializeApp } from 'firebase/app'; // Importa initializeApp desde 'firebase/app'
import { getAnalytics } from 'firebase/analytics'; // Importa getAnalytics desde 'firebase/analytics'
import { getAuth } from 'firebase/auth'; 
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyDxkYI19cDy_36-Txg1hkigf14utWsw4W4",
    authDomain: "concursoappmuni.firebaseapp.com",
    projectId: "concursoappmuni",
    storageBucket: "concursoappmuni.appspot.com",
    messagingSenderId: "415095261544",
    appId: "1:415095261544:web:8d600216f752cf78002edd",
    measurementId: "G-TL6BJ03K76"
  };
  
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);
  const auth= getAuth(app)
  const db = getFirestore(app);
  const storage = getStorage(app);


  export {auth, analytics, db , storage}




