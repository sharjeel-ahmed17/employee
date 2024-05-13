import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAa_KDquAv0WMjzBC9u_vFbw1qoIUWSbIk",
    authDomain: "bari-shopping.firebaseapp.com",
    databaseURL: "https://bari-shopping-default-rtdb.firebaseio.com",
    projectId: "bari-shopping",
    storageBucket: "bari-shopping.appspot.com",
    messagingSenderId: "1062447626800",
    appId: "1:1062447626800:web:bf31e6a33d46b9784ecbf5",
    measurementId: "G-X84770BH81"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

