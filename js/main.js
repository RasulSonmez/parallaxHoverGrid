function makeWinHeight() {
    var vh = window.innerHeight;
    var projects = vh / 2;
    
    var scene = document.getElementById("scene");
    var mainLayer = document.querySelector(".layer.main");
    var colLinks = document.querySelectorAll("#scene .col a, #scene .col");
    
    if (scene) scene.style.height = vh + "px";
    if (mainLayer) mainLayer.style.height = vh + "px";
  
    colLinks.forEach(function (element) {
      element.style.height = projects + "px";
    });
  }
  
  window.addEventListener("load", makeWinHeight);
  window.addEventListener("resize", makeWinHeight);
  
  var scene = document.getElementById("scene");
  if (scene) {
    var parallax = new Parallax(scene);  
  }
  