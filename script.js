// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhUo4b4EfFCbAXfgD10sXqv_hys-VA4Co",
    authDomain: "buy-one-gram-employees.firebaseapp.com",
    projectId: "buy-one-gram-employees",
    storageBucket: "buy-one-gram-employees.firebasestorage.app",
    messagingSenderId: "799737329021",
    appId: "1:799737329021:web:d2f3c0cf0c2921310e8814",
    measurementId: "G-MDH33MMWS9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById('visitor-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const purpose = document.getElementById('purpose').value;

    // Generate a unique document ID
    const docId = Date.now().toString();

    // Save data to Firestore
    await db.collection('entry').doc('visitors').set({
        [docId]: {
            name: name,
            contact: contact,
            purpose: purpose,
            time: new Date().toISOString()
        }
    }, { merge: true });

    // Show waiting screen
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('waiting-screen').style.display = 'flex';
});