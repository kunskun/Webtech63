var controller = new ScrollMagic.Controller();

// build tween
//section1
var tweenCircle = gsap.to("#animate", {
    top: 2000,
    scale: 6,
    transformOrigin: "center center",
    ease: Linear.easeNon,
});

var tweenBg11 = gsap.from("#bg11", {
    top: 1700,
    opacity: 0,
    ease: Linear.easeNone,
});

var tweenPhone2 = gsap.to("#phone2", {
    top: -70,
    ease: Linear.easeNone,
});

var tweenPhone3 = gsap.from("#phone3", {
    top: 2000,
    ease: Linear.easeNone,
});
//section2
var tweenShapeHL = gsap.to("#bg-shape-hightlight", {
    top: -20,
    ease: Linear.easeNone
})

// build scean
//section 1
myScene(tweenCircle, 2000, "#multiDirect")
myScene([tweenBg11, tweenPhone2], 900, "#multiDirect")
myScene(tweenPhone3, 1700, "#multiDirect")
myScene(tweenShapeHL, 500, "#bg-shape-hightlight")

// build scean function
function myScene(tween, time, trigger) { // function scroll down
    var scene = new ScrollMagic.Scene({
            triggerElement: trigger,
            duration: time,
            // offset: 250
        })
        .setTween(tween)
        .addTo(controller);
}

//section2
gsap.registerEffect({
    name: "boxEnter",
    defaults: {
        duration: 0.3,
        ease: Linear.easeNone,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            top: -8,
            ease: Linear.easeNone,
        });
    }
});
gsap.registerEffect({
    name: "boxOut",
    defaults: {
        duration: 0.3,
        ease: Linear.easeNone
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            top: 0,
            ease: Linear.easeNone,
        });
    }
})

document.querySelectorAll(".hightlight-box").forEach(function (box) {
    box.addEventListener("mouseover", function () {
        gsap.effects.boxEnter(this);
    });
});

document.querySelectorAll(".hightlight-box").forEach(function (box) {
    box.addEventListener("mouseout", function () {
        gsap.effects.boxOut(this);
    });
});