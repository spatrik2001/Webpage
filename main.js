window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementsByClassName("nav").style.padding = "20px";
        document.getElementById("name").style.fontSize = "25px";
    }
    else {
        document.getElementsByClassName("nav").style.padding = "30px";
        document.getElementById("name").style.fontSize = "35px";
    }
}