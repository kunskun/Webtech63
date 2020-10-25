var controller = new ScrollMagic.Controller();

// build tween
var tween = TweenMax.to("#animate", 0.5, {
    width: 1000,
    height:1000,
    ease: Linear.easeNone
});

// build scene
var scene = new ScrollMagic.Scene({
        triggerElement: "#multiDirect",
        duration: 700,
        offset: 250
    })
    .setTween(tween)
    .setPin("#animate")
    .addTo(controller);

// init controller horizontal
var controller_h = new ScrollMagic.Controller({
    vertical: false
});

// build tween horizontal
var tween_h = TweenMax.to("#animate", 0.5, {
    rotation: 360,
    ease: Linear.easeNone
});

// build scene
var scene_h = new ScrollMagic.Scene({
        duration: 700
    })
    .setTween(tween_h)
    .setPin("#animate")
    .addTo(controller_h);