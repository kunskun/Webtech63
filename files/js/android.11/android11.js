var controller = new ScrollMagic.Controller();

// build tween
var tween = TweenMax.to("#animate", 0.5, {
    scale:4,
    ease: Linear.easeNone
});


// build scene
var scene = new ScrollMagic.Scene({
        triggerElement: "#multiDirect",
        duration: 700,
        // offset: 250
    })
    .setTween(tween)
    .setPin("#animate")
    .addTo(controller);