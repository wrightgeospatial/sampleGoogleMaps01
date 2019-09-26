  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC7M-2tuRjN8sbgsU86Z7qeZ_DSduTyPiU",
    authDomain: "nwas-regional-breakdown.firebaseapp.com",
    databaseURL: "https://nwas-regional-breakdown.firebaseio.com",
    projectId: "nwas-regional-breakdown",
    storageBucket: "nwas-regional-breakdown.appspot.com",
    messagingSenderId: "500882842293"
  };
  firebase.initializeApp(config);
  // alert('Firebase Database Initialized!!!')

  // Link: https://nwas-regional-breakdown.firebaseio.com
  
  // Declare Database Connection Reference
  var fbRef = firebase.database().ref();


  