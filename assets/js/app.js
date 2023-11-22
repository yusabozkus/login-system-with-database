const firebaseConfig = {
    apiKey: "AIzaSyCWJNNbbnb04AKd8nT5-uUrQsfntdu8Gqo",
    authDomain: "login-system-video-5c3f6.firebaseapp.com",
    databaseURL: "https://login-system-video-5c3f6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "login-system-video-5c3f6",
    storageBucket: "login-system-video-5c3f6.appspot.com",
    messagingSenderId: "903461586183",
    appId: "1:903461586183:web:09d11dfbfb81ef0bdeb1a2",
    measurementId: "G-TP2DZWGHTM"
};

firebase.initializeApp(firebaseConfig)
var database = firebase.database();
var auth = firebase.auth();

/* SIGN UP */
function signUpLoad() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in
            window.location.href = "home.html"
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
}
function saveUserToDB() {
    let username = document.getElementById("username").value
    let fullname = document.getElementById("fullname").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 

            database.ref("users").push({
                username: username,
                fullname: fullname,
                email: email,
                password: password
            })
            alert("user account created!")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
}

/* SIGN IN */
function signInLoad() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in
            window.location.href = "home.html"
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
}
function signInToSite() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            window.location.href = "home.html"
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
}

/* HOME */
function homeLoad() {
    auth.onAuthStateChanged((user) => {
        if (user) {
            // User is signed in
            
            // ...s
        } else {
            // User is signed out
            // ...
            window.location.href = "sign-in.html"
        }
    });
}
function signOutUserAccount() {
    auth.signOut().then(() => {
        // Sign-out successful.
        window.location.href = "sign-in.html"
    }).catch((error) => {
        // An error happened.
    });
}