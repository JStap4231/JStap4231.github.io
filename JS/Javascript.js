window.onload = function() {

document.getElementById("menu").addEventListener("touchstart", open);
    
    function open() {
        var x = document.getElementById("drop");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
        x.style.display = "none";
        }
    }
    
}