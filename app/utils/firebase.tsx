import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
   apiKey: "AIzaSyCVq6O3P_g8Zhy-BePeZt1o4Aev1t9LAaA",
   authDomain: "tenedores-12a79.firebaseapp.com",
   projectId: "tenedores-12a79",
   storageBucket: "tenedores-12a79.appspot.com",
   messagingSenderId: "1073120505730",
   appId: "1:1073120505730:web:4dec249412a681d7b1e99b"
}

const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp);
export default firebaseApp;

