import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
<script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js"></script>
var firebaseConfig = {
    apiKey: "AIzaSyAGlvFKBBQ4lL1NgEI44wQTaI2tWwU8DD4",
    authDomain: "upperdelivery.firebaseapp.com",
    databaseURL: "https://upperdelivery.firebaseio.com",
    projectId: "upperdelivery",
    storageBucket: "upperdelivery.appspot.com",
    messagingSenderId: "952144665779",
    appId: "1:952144665779:web:11d6aa5ebf9d6b3bcaa4c6",
    measurementId: "G-8K37SB31R4"
  };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const projectStorage  = firebase.storage();
 const projectFirestore = firebase.storage();

 export{ projectStorage, projectFirestore };


/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAGlvFKBBQ4lL1NgEI44wQTaI2tWwU8DD4",
    authDomain: "upperdelivery.firebaseapp.com",
    databaseURL: "https://upperdelivery.firebaseio.com",
    projectId: "upperdelivery",
    storageBucket: "upperdelivery.appspot.com",
    messagingSenderId: "952144665779",
    appId: "1:952144665779:web:11d6aa5ebf9d6b3bcaa4c6",
    measurementId: "G-8K37SB31R4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>*/