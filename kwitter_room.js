//Añade los enlaces de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDVha-JxMJA3Aju8UpB-fkgYKyEFwXcNUw",
  authDomain: "kwitter-ebafa.firebaseapp.com",
  databaseURL: "https://kwitter-ebafa-default-rtdb.firebaseio.com",
  projectId: "kwitter-ebafa",
  storageBucket: "kwitter-ebafa.firebasestorage.app",
  messagingSenderId: "562809833664",
  appId: "1:562809833664:web:02dd845b46b32cfc030525"
};


firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
