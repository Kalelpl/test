
function openNav() {
     document.getElementById("mySidenav").style.width = "25%"
 }


 function closeNav() {
     document.getElementById("mySidenav").style.width = "0";
 }

function myFunction(x) {
    if (x.matches) 
        function openNav() {
     document.getElementById("mySidenav").style.width = "100%"
 }
 function closeNav() {
     document.getElementById("mySidenav").style.width = "0";
 }
}

var x = window.matchMedia("(max-width: 440px)")
x.addListener(myFunction)

