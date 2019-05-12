var show = 1;
var oneOpen = true;
function OpenMenu() {
    // show == -1 ? $(".wrapper").fadeOut(100) : $(".wrapper").fadeIn(100);
    if (show == -1) {
        document.getElementById('menu').style = "transition: transform 0.1s;transform:translateY(50%);";
        $(".wrapper").fadeOut(100);
    }
    else {
        $(".wrapper").fadeIn(100);
        document.getElementById('menu').style = "transition: transform 0.1s;transform:translateY(0%);";
    }
    show = -show;
}