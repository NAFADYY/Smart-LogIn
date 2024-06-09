let displayName = document.getElementById("displayName");
let signOutBtn = document.getElementById("signOutBtn");





signOutBtn.addEventListener("click" , function (){
  location.href = "index.html";
})


displayName.innerHTML = `welcome  ${localStorage.getItem("username")}`;

