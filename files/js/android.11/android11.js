var controller = new ScrollMagic.Controller();

// build tween
var tweenCircle = gsap.to("#animate", {
    top:2000,
    scale: 6,
    transformOrigin: "center center",
    ease: Linear.easeNon,
})
var tweenBg11 = gsap.from("#bg11", {
    top: 1700,
    opacity: 0,
    ease: Linear.easeNone,
});
var tweenPhone2 = gsap.to("#phone2", {
    top: -70,
    ease: Linear.easeNone,
})
var tweenPhone3 = gsap.from("#phone3", {
    top: 2000,
    ease: Linear.easeNone,
})


// build scene
var scene = new ScrollMagic.Scene({
        triggerElement: "#multiDirect",
        duration: 2000,
        // offset: 250
    })
    .setTween(tweenCircle)
    .addTo(controller);

var scene2 = new ScrollMagic.Scene({
        triggerElement: "#multiDirect",
        duration: 900,
        // offset: 250
    })
    .setTween([tweenBg11, tweenPhone2])
    .addTo(controller);
var scene3 = new ScrollMagic.Scene({
        triggerElement: "#multiDirect",
        duration: 1700,
        // offset: 250
    })
    .setTween([tweenPhone3])
    .addTo(controller);