
  var firebaseConfig = {
    apiKey: "AIzaSyADughXgN6Qav8vEqFDdgCzHjzX15hFjIM",
    authDomain: "letschatapp-edfb0.firebaseapp.com",
    databaseURL: "https://letschatapp-edfb0-default-rtdb.firebaseio.com",
    projectId: "letschatapp-edfb0",
    storageBucket: "letschatapp-edfb0.appspot.com",
    messagingSenderId: "406092204871",
    appId: "1:406092204871:web:b91317a63eb7789b439a62"
  };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      user_name = localStorage.getItem("user_name");
      document.getElementById("username").innerHTML = "Welcome " + user_name + "!"
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='roome_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logOut()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}