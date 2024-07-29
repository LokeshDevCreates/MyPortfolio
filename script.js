function myFunction(x) {
    x.classList.toggle("change");
    var nav = document.getElementById("link-tags");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

document.getElementById("me-openPanelLink").addEventListener("click", function() {
    document.getElementById("me-part").style.left = "0%";
});
document.getElementById("project-openPanelLink").addEventListener("click", function() {
    document.getElementById("project-part").style.left = "0%";
});
document.getElementById("project-closePanelLink").addEventListener("click", function() {
    document.getElementById("project-part").style.left = "100%";
});
document.getElementById("me-closePanelLink").addEventListener("click", function() {
    document.getElementById("me-part").style.left = "100%";
});
document.getElementById("me-openPanelLink1").addEventListener("click", function() {
    document.getElementById("me-part").style.left = "0%";
});
document.getElementById("me-openPanelLink2").addEventListener("click", function() {
    document.getElementById("me-part").style.left = "0%";
});
document.getElementById("project-openPanelLink2").addEventListener("click", function() {
    document.getElementById("project-part").style.left = "0%";
});
