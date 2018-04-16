var size = window.matchMedia("(max-width: 440px)")

function openNav() {
    document.getElementById("mySidenav").style.width = "25%";
    if (size.matches) {
        document.getElementById("mySidenav").style.width = "100%";
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
