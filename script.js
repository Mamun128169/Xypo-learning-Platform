// --------For Toggle Menubar------

let menuVar = document.getElementById("menu");
let sideNav = document.getElementById("sideNav");

sideNav.style.right = "-250px";

menuVar.addEventListener("click", function() {
    if(sideNav.style.right == "-250px") {
        sideNav.style.right = "0px";
     } else {
        sideNav.style.right = "-250px";
    }
});



// ----For Smoot Scroll effect----

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 800,
	speedAsDuration: true
});