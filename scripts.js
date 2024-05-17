// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdvETmJITLCx0eg_q30LJur1yThCuuLMo",
  authDomain: "ecommerce-5f863.firebaseapp.com",
  databaseURL: "https://ecommerce-5f863-default-rtdb.firebaseio.com",
  projectId: "ecommerce-5f863",
  storageBucket: "ecommerce-5f863.appspot.com",
  messagingSenderId: "391256408389",
  appId: "1:391256408389:web:9a2a093e3a7449d9a47e2c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

// Handle form submission
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Retrieve data from Firebase
    database.ref('users').orderByChild('username').equalTo(username).once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          snapshot.forEach(childSnapshot => {
            const userData = childSnapshot.val();
            const storedPassword = userData.password;
            if (password === storedPassword) {
              alert("Successfully login.");            
              window.location.href = "../user_welcomefinal.html";
            } else {
              alert("Sorry, password incorrect."); // Display failure message
            }
          });
        } else {
          alert("Sorry, username not found."); // Display failure message
        }
      })
      .catch(error => {
        console.error("Error retrieving data from Firebase: ", error);
      });

    // Clear form inputs after submission
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  });
});

// Merge with existing JavaScript
document.addEventListener("DOMContentLoaded", function() {
  const navbarToggle = document.querySelector(".navbar-toggle");
  const navLinks = document.querySelector("nav ul");
  const header = document.querySelector("header");

  navbarToggle.addEventListener("click", function() {
    navLinks.classList.toggle("open"); // Toggle the 'open' class
  });

  window.addEventListener("scroll", function() {
    if (window.scrollY > header.offsetTop) {
      header.classList.add("scroll-blur");
    } else {
      header.classList.remove("scroll-blur");
    }
  });
});
