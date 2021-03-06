const openMenu = document.getElementById("btn");
const navList = document.querySelector(".nav-list");

// adding an even listner on the button
openMenu.addEventListener("click", () => {
  if (navList.className === "nav-list"){
    navList.className += " mobile-menu";
  }else{
    navList.className = "nav-list";
  }
})