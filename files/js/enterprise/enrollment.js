var controller = new ScrollMagic.Controller();
let tl = gsap.timeline()

// section1
gsap.from("#text-st1", {
    duration: 0.5,
    y: 50,
    opacity: 0
})
gsap.from("#img-st1", {
    delay: 0.4,
    duration: 0.3,
    opacity: 0
})
let tlSt1 =  tl.from(".shape-pills-st1", {
    duration: 1,
    left: 1500,
    top:850,
})

var moveSt1 = gsap.to(".shape-pills-st1", {
    x: 300,
    ease: Linear.easeNon,
});

myScene(moveSt1, 1000, ".shape-pills-st1")

// section2
var moveSt2 = gsap.to("#deploy-st2", {
    x: -1300,
    ease: Linear.easeNon,
});

myScene(moveSt2, 1500, "#deploy-st2")


// section3
var moveSt3 = gsap.to(".img-st3", {
    transformOrigin: "top right",
    // y:100,
    scale:0.7,
    ease: Linear.easeNon,
});
myScene(moveSt3, 500, ".stage3")

var moveSt3_2 = gsap.to(".shape-circle-st4", {
    top:300,
    ease: Linear.easeNon,
});

myScene(moveSt3_2, 1500, ".shape-circle-st4")

//section4


var moveSt4_1 = gsap.to(".stage4", {
    top:-350,
    ease: Linear.easeNon,
});
myScene(moveSt4_1, 500, ".stage3")


// section5


// section6


// section7

//section8
var moveSt8 = gsap.from(".shape-pills-st8", {
    top:150,
    ease: Linear.easeNon,
});

myScene(moveSt8, 1000, ".shape-pills-st8")


function myScene(tween, time, trigger) { // function scroll down
    var scene = new ScrollMagic.Scene({
            triggerElement: trigger,
            duration: time,
            // offset: 250
        })
        .setTween(tween)
        .addTo(controller);
}


gsap.registerPlugin()
gsap.registerEffect({
    name: "moveRight",
    defaults: {
        duration: 0.1,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            width: "100%",
            ease: Linear.easeNone,
        });
    }
})
gsap.registerEffect({
    name: "moveLeft",
    defaults: {
        duration: 0.1,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            width: "80%",
            ease: Linear.easeNone,
        });
    }
})
// arrow-to-top
document.querySelectorAll("#bt-right").forEach(function (box) {
    box.addEventListener("click", function () {
        let bar = document.querySelector(".progress-bar-line")
        gsap.effects.moveRight(bar)
        // gsap.to("#bt-right", {
        //     duration: 0.1,
        //     opacity: 0.2
        // })
        // gsap.to("#bt-left", {
        //     duration: 0.1,
        //     opacity: 1
        // })
        gsap.to("#album-st7", {
            duration: 0.3,
            left: -60
        })
        // gsap.effects.arrowMoveTop(this.children[1]);
    });
});
document.querySelectorAll("#bt-left").forEach(function (box) {
    box.addEventListener("click", function () {
        let bar = document.querySelector(".progress-bar-line")
        gsap.effects.moveLeft(bar)
        // gsap.to("#bt-left", {
        //     duration: 0.1,
        //     opacity: 0.2
        // })
        // gsap.to("#bt-right", {
        //     duration: 0.1,
        //     opacity: 1
        // })
        gsap.to("#album-st7", {
            duration: 0.3,
            left: 280
        })
        // gsap.effects.arrowMoveTop(this.children[1]);
    });
});

// video
function openVideo(link) {
    let body = document.querySelector("body")
    body.style.overflowY = "hidden"
    let stageBg = document.querySelector(".stageBg")
    let video = document.querySelector(".video-content")
    let button = document.querySelector(".closeButton")
    video.setAttribute('src', link)
    button.removeAttribute("hidden")
    video.removeAttribute("hidden")
    stageBg.removeAttribute("hidden")
}

function closeVideo() {
    let body = document.querySelector("body")
    body.style.overflowY = "scroll"
    let stageBg = document.querySelector(".stageBg")
    let video = document.querySelector(".video-content")
    let button = document.querySelector(".closeButton")
    video.removeAttribute('src')
    video.setAttribute("hidden", true)
    stageBg.setAttribute("hidden", true)
    button.setAttribute("hidden", true)
}

//learn more
//learn more
gsap.registerEffect({
    name: "arrowMoveTop",
    defaults: {
        duration: 0.2,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            y: -5,
            x: 5,
            ease: Linear.easeNone,
        });
    }
})
gsap.registerEffect({
    name: "arrowMoveRight",
    defaults: {
        duration: 0.2,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            left: 10,
            ease: Linear.easeNone,
        });
    }
})
gsap.registerEffect({
    name: "arrowMoveOut",
    defaults: {
        duration: 0.2,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            y: 0,
            x: 0,
            ease: Linear.easeNone,
        });
    }
})
gsap.registerEffect({
    name: "arrowMoveOut2",
    defaults: {
        duration: 0.2,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            left: 0,
            ease: Linear.easeNone,
        });
    }
})
// arrow-to-top
document.querySelectorAll(".learnMore").forEach(function (box) {
    box.addEventListener("mouseenter", function () {
        gsap.effects.arrowMoveTop(this.children[1]);
    });
});
document.querySelectorAll(".learnMore").forEach(function (box) {
    box.addEventListener("mouseleave", function () {
        gsap.effects.arrowMoveOut(this.children[1]);
    });
});
document.querySelectorAll(".learnMore2").forEach(function (box) {
    box.addEventListener("mouseenter", function () {
        gsap.effects.arrowMoveRight(this.children[1]);
    });
});
document.querySelectorAll(".learnMore2").forEach(function (box) {
    box.addEventListener("mouseleave", function () {
        gsap.effects.arrowMoveOut2(this.children[1]);
    });
});