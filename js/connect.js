/*
var dbProfile = "";
var dbNewyearMember = "";
var dbNewyearData = "";
var dbNewyearLog = "";
var dbGiftOpen = "";
var dbGiftOrder = "";
*/
function Connect_DB() {
  var firebaseConfig = {
    apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
    authDomain: "retailproject-6f4fc.firebaseapp.com",
    projectId: "retailproject-6f4fc",
    databaseURL: "https://file-upload-6f4fc.firebaseio.com",
    storageBucket: "retailproject-6f4fc.appspot.com",
    messagingSenderId: "653667385625",
    appId: "1:653667385625:web:a5aed08500de80839f0588",
    measurementId: "G-9SKTRHHSW9"
  };
  firebase.initializeApp(firebaseConfig);

  dbProfile = firebase.firestore().collection("CheckProfile");
  dbNewyearMember = firebase.firestore().collection("Newyear2024_member");
  dbNewyearData = firebase.firestore().collection("Newyear2024_data");
  dbNewyearLog = firebase.firestore().collection("Newyear2024_log");
  dbGiftOrder = firebase.firestore().collection("Newyear2024_order");
  dbGiftStock = firebase.firestore().collection("Newyear2024_gift");
  dbGiftOpen = firebase.firestore().collection("TNIdate");



}
