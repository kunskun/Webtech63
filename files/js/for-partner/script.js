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

function reScale() {
    document.getElementById("#bot-box").style
}