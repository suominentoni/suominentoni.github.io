function toggleMenu() {
    var nav = document.getElementById("topnav");
    if (nav.className === "topnav") {
        nav.className += " vertical";
    } else {
        nav.className = "topnav";
    }
}
