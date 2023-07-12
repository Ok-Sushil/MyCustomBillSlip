
    // Paste your Firebase configuration here
    var firebaseConfig = {
        apiKey: "AIzaSyCl_9VpivUMQsqdlbXX5mV4vazUdAfJkMo",
        authDomain: "mybill-63c2a.firebaseapp.com",
        projectId: "mybill-63c2a",
        storageBucket: "mybill-63c2a.appspot.com",
        messagingSenderId: "626693804051",
        appId: "1:626693804051:web:8807ec7f90531eb436efe6",
        measurementId: "G-H4S9TGQHK6",
      databaseURL: "https://mybill-63c2a-default-rtdb.firebaseio.com/"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Add event listener for the "Store Data" button
    document.getElementById("storeDataButton").addEventListener("click", function() {
      // Get form values
      var referenceNo = document.getElementById("referenceNo").value;
      var collectionDate = document.getElementById("collectionDate").value;
      var netbanking = document.getElementById("netbanking").value;
      var consumerName = document.getElementById("consumerName").value;
      var address = document.getElementById("address").value;
      var paymentSource = document.getElementById("paymentSource").value;
      var accountNo = document.getElementById("accountNo").value;
      var amount = document.getElementById("amount").value;
      var amountText = document.getElementById("amountText").value;
      
      // Store data in Firebase Realtime Database
      firebase.database().ref("bills").push().set({
        referenceNo: referenceNo,
        collectionDate: collectionDate,
        netbanking: netbanking,
        consumerName: consumerName,
        address: address,
        paymentSource: paymentSource,
        accountNo: accountNo,
        amount: amount,
        amountText: amountText
      }).then(function() {
        alert("Data stored successfully!");
        document.getElementById("billForm").reset();
      }).catch(function(error) {
        console.error("Error storing data: ", error);
      });
    });
