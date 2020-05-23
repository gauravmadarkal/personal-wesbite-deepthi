function responsiveBurgerIcon() {
    var x = document.getElementById("topnav");
    if (x.className === "nav nav-masthead justify-content-center") {
        x.className += " responsive";
    } else {
        x.className = "nav nav-masthead justify-content-center";
    }
}
(function(){
    var animDiv = document.getElementById("animation");
    var bodyDiv = document.getElementById("mainBody");
    show = function(){
        animDiv.style.display = "block";
        setTimeout(showBody, 1500);

    },
    showBody = function(){
        animDiv.style.display = "none";
        bodyDiv.setAttribute("style","opacity:1;");
    };
    show();
})();
    