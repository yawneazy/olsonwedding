import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBfTZMWYX5bba7oRt3gWbXFZHLt4Pf8-Nw",
    authDomain: "olsonwedding123.firebaseapp.com",
    projectId: "olsonwedding123",
    storageBucket: "olsonwedding123.appspot.com",
    messagingSenderId: "29448824860",
    appId: "1:29448824860:web:9e0e1cc27d5bfbb65b97d9"
  };

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default app;