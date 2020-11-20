var controller = new ScrollMagic.Controller();

var tweenSecur = gsap.to("#warp-circle", {
    x: 500
});
var tweenWellbe = gsap.to("#move-font", {
    x: -1200
});
var tweenFirstCir = gsap.to("#cir", {
    x: 600
});


animate("#cir", 2000, tweenFirstCir);
animate("#secur", 2000, tweenSecur);
animate("#wellbe", 2000, tweenWellbe);


function animate(tag, dur, tween) {
    var sceen1 = new ScrollMagic.Scene({
            triggerElement: tag,
            duration: dur,
        })
        .setTween(tween)
        .addTo(controller)
}

var timeline = new TimelineMax({});
var timeline1 = new TimelineMax({});
var timeline2 = new TimelineMax({});
var timeline3 = new TimelineMax({});
timeline.to(".all", 1, {
    opacity: 1
});
timeline1.to("#warp-circle", 1, {
    left: "10rem"
});
timeline1.to("#warp-circle", 1, {
    left: "10rem"
});
timeline3.to(".img1", 1, {
    opacity: 1,
    left: "60.5rem"
});
timeline2.to("#cir", 1, {
    left: "45rem"
});
document.getElementById("bot-box").style = 'position:relative;height:730px;width:1260px;transition-duration: 1s; left:0rem; top:-2rem';
document.getElementById("warp-text-2").style = 'position: relative; top:0px;transition-duration: 1s;';
document.getElementById("eiei1").style = 'position: relative;left:50rem;transition-duration: 1s;'

function res() {
    document.getElementById("bot-box").style = 'position:relative; height:850px; width:120%; transition-duration: 1s; left:-25rem;';
    document.getElementById("warp-text-2").style = 'position: relative; top:-120px;transition-duration: 1s;';
    document.getElementById("eiei1").style = 'position: relative;left:75rem;transition-duration: 1s;'
    document.getElementById("last-but").style = "color:#3ddc84;transition-duration: 1s;";
}

function res1() {
    document.getElementById("bot-box").style = 'position:relative;height:730px;width:1260px;transition-duration: 1s; left:0rem;';
    document.getElementById("warp-text-2").style = 'position: relative; top:0px;transition-duration: 1s;';
    document.getElementById("eiei1").style = 'position: relative;left:50rem;transition-duration: 1s;'
    document.getElementById("last-but").style = "color:white;transition-duration: 1s;";

}

function jang() {
    document.getElementById("be-bot").style = 'opacity: 0.5; transition-duration: 0.3s';
}

function chad() {
    document.getElementById("be-bot").style = 'opacity: 1; transition-duration:0.3s';
}