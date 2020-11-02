window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav").style.padding = "30px 10px";
        document.getElementById("name").style.fontSize = "25px";
    }
    else {
        document.getElementById("nav").style.padding = "40px 10px";
        document.getElementById("name").style.fontSize = "35px";
    }
}