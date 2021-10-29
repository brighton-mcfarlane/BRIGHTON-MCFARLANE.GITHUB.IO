function openNav() {
  if (document.getElementById("mySidebar").style.width == "350px" && document.getElementById("main").style.marginLeft == "350px") {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  else {
    document.getElementById("mySidebar").style.width = "350px"; 
    document.getElementById("main").style.marginLeft = "350px"
  }
}
