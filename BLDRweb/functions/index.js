const functions = require("firebase-functions");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbimyUq8bz8SaRx7drqkmNRUmAI2tK-a8",
  authDomain: "bldrstock.firebaseapp.com",
  databaseURL: "https://bldrstock-default-rtdb.firebaseio.com",
  projectId: "bldrstock",
  storageBucket: "bldrstock.appspot.com",
  messagingSenderId: "775646920154",
  appId: "1:775646920154:web:a9e792bb5e037f952094e3",
  measurementId: "G-FMFCB0BNRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
