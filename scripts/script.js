if(document.querySelector("title").text === "Reset an EPIC Mail Account Password"){
  document.querySelector("h3#form-header").style.padding = "10px";
  document.querySelector("h3#form-header").style.fontSize = "1.7em";
  document.querySelector("h3#form-header").style.marginTop = "80px";
}
function change(){
    console.log("Read Messages")
}

function openNav(){
  let sideBar = document.querySelector("#sidebar");
  sideBar.style.display = "inline" 
}
function closeNav(){
  let sideBar = document.querySelector("#sidebar");
  sideBar.style.display = "none" 
}