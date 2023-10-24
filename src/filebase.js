// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , FacebookAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX60ZJJ5aiqWPeBeri1zpBXzpCxP0DNJA",
  authDomain: "phone-auth-8bbe2.firebaseapp.com",
  projectId: "phone-auth-8bbe2",
  storageBucket: "phone-auth-8bbe2.appspot.com",
  messagingSenderId: "962567170876",
  appId: "1:962567170876:web:ab8dea58ac07b181f5cc39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new FacebookAuthProvider(app);
export default app;
