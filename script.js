


document.addEventListener("DOMContentLoaded",init);

function init(){
  let query = window.matchMedia("(min-width :600px)");
  if(query.matches){
        Shery.mouseFollower();
        Shery.makeMagnet(".magnet");
        Shery.imageMasker(".home-img img" , {
          mouseFollower: true,
          text: "Kanha",
          ease: "cubic-bezier(0.23, 1, 0.320, 1)",
          duration: 1,
        });
  }
  else{
    console.log("no")
  }
}


function night(){
  let header = document.querySelector("header");
  let menu = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");
  
  window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
  });
  
  menu.onclick = () => {
    navbar.classList.toggle("active");
  };
  window.onscroll = () => {
    navbar.classList.remove("active");
  };
  
  // Dark Mode / light mode
  let darkmode = document.querySelector("#darkmode");
  
  darkmode.onclick = () => {
    if (darkmode.classList.contains("bx-moon")) {
      darkmode.classList.replace("bx-moon", "bx-sun");
      document.body.classList.add("active");
    } else {
      darkmode.classList.replace("bx-sun", "bx-moon");
      document.body.classList.remove("active");
    }
  };
}

night();


var loader = document.querySelector("#box1")
var main = document.querySelector("#main")
window.addEventListener("load",function(){
    loader.style.display = "none"
    main.style.display = "block"
    
})


                                    