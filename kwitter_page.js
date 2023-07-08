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
  room_name=localStorage.getItem("room_name");
  user_name=localStorage.getItem("user_name");
  
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
}

function logout() {
  localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";    
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message=message_data['message'];
like = message_datal['like']
name_with_tag = "<h4> " + name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 clas='btn btn-warning' id="+firebase_message_id+"value="+ like + "onclick=updateLike(this.id)'>";
span_with_tag="<span class='glyphicon-thumbs-up'>Like:" + like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML +=row;

//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked o like button - "+ message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_links = Number(likes) + 1 ;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });

}