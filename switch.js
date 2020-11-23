var ref = firestore.collection("Customers");

      function swtich() {
        var array1 = [];
        var count1 = 0;
        var firestore = firebase.firestore();
        ref.get().then(function(querySnapshot1) {
            querySnapshot1.forEach(function(doc) {
        
                array1[count1] = doc.data();
                console.log(array1[count1]);
                firestore.collection("Drivers").add(array1[count1]);
                count1++;
            
            });

      });

      }