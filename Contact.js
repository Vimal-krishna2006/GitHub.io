const firebaseConfig = {
    apiKey: "AIzaSyBa_0eUBhjbj7N0JiI7CVmGJKxLd2xgDQA",
    authDomain: "yuvi-boutique.firebaseapp.com",
    databaseURL: "https://yuvi-boutique-default-rtdb.firebaseio.com",
    projectId: "yuvi-boutique",
    storageBucket: "yuvi-boutique.firebasestorage.app",
    messagingSenderId: "605237212501",
    appId: "1:605237212501:web:6e2f5d08f23d4d5859abdc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore reference
const db = firebase.firestore();

// Realtime Database reference
const contactFormDB = firebase.database().ref('contactForm');

// Submit form listener
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var nameV = document.getElementById('name').value;
    var emailV = document.getElementById('email').value;
    var phoneV = document.getElementById('phone').value;

    saveMessages(nameV, emailV, phoneV);

    console.log("got it...")

    console.log(nameV);
    document.getElementById('contactForm').reset();
    
}

const saveMessages = (nameP, emailP, phoneP) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: nameP,
        email: emailP,
        phone: phoneP,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
