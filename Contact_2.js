// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa_0eUBhjbj7N0JiI7CVmGJKxLd2xgDQA",
  authDomain: "yuvi-boutique.firebaseapp.com",
  databaseURL: "https://yuvi-boutique-default-rtdb.firebaseio.com",
  projectId: "yuvi-boutique",
  storageBucket: "yuvi-boutique.appspot.com",
  messagingSenderId: "605237212501",
  appId: "1:605237212501:web:6e2f5d08f23d4d5859abdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to write data to Firebase
async function writeUserData(name, email, phone) {
  try {
    await set(ref(database, 'contactForm/' + Date.now()), {
      username: name,
      email: email,
      phone: phone,
      timestamp: new Date().toISOString()
    });
    return true;
  } catch (error) {
    console.error("Error writing to Firebase: ", error);
    return false;
  }
}

// Form submission handler
async function submitForm(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  // Basic validation
  if (!name || !email || !phone) {
    alert('Please fill in all fields');
    return;
  }

  try {
    const success = await writeUserData(name, email, phone);
    if (success) {
      console.log("Data saved successfully:", { name, email, phone });
      document.getElementById('contactForm').reset();
      
      // Show success message to user
      alert('Thank you! Your information has been submitted successfully.');
      
      // Or show your popup if you have one
      showPopup();
    }
  } catch (error) {
    console.error("Form submission error:", error);
    alert('There was an error submitting your form. Please try again.');
  }
}

// Initialize form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', submitForm);
  }
});