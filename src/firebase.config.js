import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAvKoefaNBeIeUvEnWBjMETRpcqMpwOvVM",
  authDomain: "chattingapp-9bcf2.firebaseapp.com",
  projectId: "chattingapp-9bcf2",
  storageBucket: "chattingapp-9bcf2.appspot.com",
  messagingSenderId: "739343500318",
  appId: "1:739343500318:web:5a7ef066a8e709d7e2da0f",
  measurementId: "G-GE7T200Q8X"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database