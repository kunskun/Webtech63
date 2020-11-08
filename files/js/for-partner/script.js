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