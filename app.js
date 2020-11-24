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
 var array = [];
 var count = 0;
 var docRef = firestore.collection("Delivery");
 var docRefDriver = firestore.collection("Drivers");
 var customerName = document.getElementById("nameC");
 var customerTrack = document.getElementById("numberT");
 var customerLocation = document.getElementById("locationT");

 //Saves the user input to Firestore and assigns a Driver from the database
 function save() {
        var e = "";
        var x = customerName.value;
        var y = customerTrack.value;
        var z = customerLocation.value;

        //Saves the user input
        docRef.doc(y).set({
            ETA: e,
            Name: x,
            OrderID: y,
            Residence: z
       
        });
        

        //Grabs every document from Driver collection and adds to an array
        docRefDriver.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
        
                array[count] = doc.data();
                count++;
            
            });
            var random = parseInt((Math.random() * array.length)-1);
            var randomDriver = array[random];
            console.log(random);
            console.log(randomDriver);
            //Assigns the driver to the new "Driver" collection for the customer
            docRef.doc(y).collection("Driver").add(randomDriver);
            });
            

    }