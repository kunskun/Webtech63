var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-animate").style.top = "0";
  } else {
    document.getElementById("nav-animate").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}