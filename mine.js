
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

// Fetch the stored data from Firebase Realtime Database
firebase.database().ref("bills").once("value")
  .then(function(snapshot) {
    var billData = snapshot.val();
    var billDataDiv = document.getElementById("billData");

    // Iterate over the bills data and display it
    for (var billKey in billData) {
      if (billData.hasOwnProperty(billKey)) {
        var bill = billData[billKey];
        var billHtml = document.createElement("div");
        billHtml.innerHTML = `
          <p><strong>Reference No.: </strong>${bill.referenceNo}</p>
          <p><strong>Collection Date: </strong>${bill.collectionDate}</p>
          <p><strong>Netbanking: </strong>${bill.netbanking}</p>
          <p><strong>Consumer Name: </strong>${bill.consumerName}</p>
          <p><strong>Address: </strong>${bill.address}</p>
          <p><strong>Payment Source: </strong>${bill.paymentSource}</p>
          <p><strong>Account No.: </strong>${bill.accountNo}</p>
          <p><strong>Amount: </strong>${bill.amount}</p>
          <p><strong>Amount Text: </strong>${bill.amountText}</p>
          <hr>
        `;
        billDataDiv.appendChild(billHtml);
      }
    }
  })
  .catch(function(error) {
    console.error("Error retrieving data: ", error);
  });
