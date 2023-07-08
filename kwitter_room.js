// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDpkN6pvZPxjlOz54TN0zqQBEof6e7H4F0",
      authDomain: "kwitter-ce788.firebaseapp.com",
      databaseURL: "https://kwitter-ce788-default-rtdb.firebaseio.com",
      projectId: "kwitter-ce788",
      storageBucket: "kwitter-ce788.appspot.com",
      messagingSenderId: "237924396074",
      appId: "1:237924396074:web:0fd4cb05108a3b51516753"
    };
    firebase.initializeApp(firebaseConfig)
    var user_name=localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML="Welcome"+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Rooom Name - " + Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function logout() {
      localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";    
    }

    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
      });
  
      localStorage.setItem("room_name", room_name);
  
      window.location = "kwitter_page.html";
  }
  
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",naem);
      window.location= "kwitter_page.html"
}
