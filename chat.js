// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCN5TmcxKjgexYupk_alMNfDEM_TnfiIDk",
    authDomain: "let-s-chat-web-app-34bd0.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-34bd0-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-34bd0",
    storageBucket: "let-s-chat-web-app-34bd0.appspot.com",
    messagingSenderId: "1093627694851",
    appId: "1:1093627694851:web:8ebb51d17ad50b8618a336"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
    */
   localStorage.setItem("username",username)
   window.location="chat_room.html"
}



