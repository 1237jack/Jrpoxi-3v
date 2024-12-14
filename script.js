// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup form handling
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert(`Signup successful! Welcome, ${user.email}`);
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
});

// Login form handling
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email-login').value;
  const password = document.getElementById('password-login').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert(`Login successful! Welcome back, ${user.email}`);
      // Optionally redirect the user
      // window.location.href = '/dashboard.html';
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
});
