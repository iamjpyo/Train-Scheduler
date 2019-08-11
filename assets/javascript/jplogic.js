var firebaseConfig = {
    apiKey: "AIzaSyCNzYaxnpfnhSiu5D1ZPCXKuOtambTBQBM",
    authDomain: "train-cb428.firebaseapp.com",
    databaseURL: "https://train-cb428.firebaseio.com",
    projectId: "train-cb428",
    storageBucket: "",
    messagingSenderId: "17802411482",
    appId: "1:17802411482:web:f5309ed9726f22ce"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();


  db.collection('train').get().then((snapshot) => {
     const data = snapshot.docs;
      data.forEach(element => {
          console.log(element.data(), element.data().frequency);

          $("#train-table > tbody").append("<tr><td>" + '<i class="fa fa-trash" id="trashcan" aria-hidden="true"></i>' + "</td><td>" + element.data().name + "</td><td>" + element.data().destination + "</td><td>" +
          element.data().frequency + "</td><td>" + element.data().frequency + "</td><td>" + element.data().frequency + "</td></tr>");

      });
  });

  $("body").on("click", ".fa-trash", function() {
    $(this).closest("tr").remove();
  });



$("#add-train").on("click", function(e) {
 e.preventDefault();
  const now = new Date();
  const name = $("#trainname-input").val();
  const destination = $("#destination-input").val();
  const frequency = $("#frequency-input").val();

    db.collection('train').doc().set({
        name: name,
        destination: destination,
        frequency: frequency,
        time: firebase.firestore.Timestamp.fromDate(now)
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

});

   
  

