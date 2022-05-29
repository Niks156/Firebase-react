import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwJJNIsQpbDqMko358XTnNZfi_XVWAcSU",
  authDomain: "fir-auth-c7c90.firebaseapp.com",
  projectId: "fir-auth-c7c90",
  storageBucket: "fir-auth-c7c90.appspot.com",
  messagingSenderId: "728908473766",
  appId: "1:728908473766:web:d92602d98195aed4481b67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default firebaseConfig;
