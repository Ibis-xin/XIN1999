function LoadingSet(titleName) {
    /*$(document).ready(function () { $("#logo").hide(); });*/
    document.getElementById("ShowTitle").innerHTML = titleName;
    setTimeout(function () { $(".ShowContainer").fadeOut(1000); }, 2000);
    setTimeout(function () { $("#ShowTitle").fadeIn(1000); }, 2000);
    setTimeout(function () { $(".ShowScreen").fadeOut(800); }, 2000);
}