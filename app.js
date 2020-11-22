var config = {
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
 firebase.initializeApp(config);

 var firestore = firebase.firestore();

 var docRef = firestore.collection("Delivery");
 var customerName = document.getElementById("nameC");
 var customerTrack = document.getElementById("numberT");
 var customerLocation = document.getElementById("locationT");

 function save() {
        var e = "";
        var x = customerName.value;
        var y = customerTrack.value;
        var z = customerLocation.value;

        docRef.doc(y).set({
            ETA: e,
            Name: x,
            OrderID: y,
            Residence: z
       
        });

    }