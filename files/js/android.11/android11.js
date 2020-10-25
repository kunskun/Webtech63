var controller = new ScrollMagic.Controller();
var controller2 = new ScrollMagic.Controller();
// build tween
var tween = gsap.to("#animate", {
    scale: 4,
    transformOrigin:"center center",
    ease: Linear.easeNone,
})
var tween2 = gsap.from("#demon", {
    opacity: 0,
    ease: Linear.easeNone,
});


// build scene
var scene = new ScrollMagic.Scene({
        triggerElement: "#multiDirect",
        duration: 900,
        // offset: 250
    })
    .setTween(tween)
    .addTo(controller);

var scene2 = new ScrollMagic.Scene({
        triggerElement: "#multiDirect",
        duration: 900,
        // offset: 250
    })
    .setTween(tween2)
    .addTo(controller2);