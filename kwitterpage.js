var firebaseConfig = {
    apiKey: "AIzaSyD2AXc9XQfZA1GrLWG5xNDlCPWxjuuQIKo",
    authDomain: "siddhartha-qbny.firebaseapp.com",
    databaseURL: "https://siddhartha-qbny-default-rtdb.firebaseio.com",
    projectId: "siddhartha-qbny",
    storageBucket: "siddhartha-qbny.appspot.com",
    messagingSenderId: "634954634570",
    appId: "1:634954634570:web:96f2b56eef0347baff1db3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  function send()
  {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name1:user_name,
          message:msg,
         like:0
      });
      document.getElementById("msg").value="";
  }