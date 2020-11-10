var controller = new ScrollMagic.Controller();

// section1
let tl = gsap.timeline()
tl.from(".shape-pills-st1", {
    duration: 1,
    x:-500,
    y:-500,
    ease: Linear.easeNone,
}).from("#text-st1", {
    duration: 0.5,
    y:200,
    opacity:0,
    ease: Linear.easeNone,
}).from("#img-st1", {
    duration: 0.5,
    x:200,
    opacity:0,
    ease: Linear.easeNone,
})

// section2
var moveSt2 = gsap.from(".shape-pills-st2", {
    y: 50,
    ease: Linear.easeNon,
});

myScene(moveSt2, 500, ".stage2")

// section3
let triggerSt3 = gsap.timeline({
    scrollTrigger: {
        start: "-50px center",
        end: "700px top",
        markers: false,
        trigger: ".stage3",
        toggleActions: "restart restart restart restart"
    }
}).from("#img-st3", {
    duration:0.5,
    opacity:0,
    scale:0,
})

var moveSt3 = gsap.from(".shape-circle-st3", {
    top:100,
    ease: Linear.easeNon,
});
myScene(moveSt3, 500, ".stage3")

//section4
var moveSt4 = gsap.from(".shape-circle-st4", {
    top:100,
    ease: Linear.easeNon,
});
myScene(moveSt4, 500, ".stage4")

let triggerSt4 = gsap.timeline({
    scrollTrigger: {
        start: "-200px center",
        end: "300px top",
        markers: false,
        trigger: ".stage4",
        toggleActions: "restart restart restart restart"
    }
}).from("#img-st4", {
    duration:0.5,
    opacity:0,
    scale:0,
})

// section5
var moveSt5 = gsap.from(".shape-pills-st5", {
    top:100,
    ease: Linear.easeNon,
});
myScene(moveSt5, 1000, ".stage5")

// section6
var moveSt6 = gsap.from(".shape-circle-st6", {
    top:-200,
    ease: Linear.easeNon,
});
myScene(moveSt6, 1000, ".stage6")

// section7
var moveSt7 = gsap.from(".shape-pills-st7", {
    top:100,
    ease: Linear.easeNon,
});
myScene(moveSt7, 1000, ".stage7")


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

gsap.registerPlugin()
gsap.registerEffect({
    name: "moveRight",
    defaults: {
        duration: 0.1,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            width:"100%",
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
            width:"80%",
            ease: Linear.easeNone,
        });
    }
})
// arrow-to-top
document.querySelectorAll("#bt-right").forEach(function (box) {
    box.addEventListener("click", function () {
        let bar = document.querySelector(".progress-bar")
        gsap.effects.moveRight(bar)
        gsap.to("#bt-right", {
            duration: 0.1,
            opacity: 0.2
        })
        gsap.to("#bt-left", {
            duration: 0.1,
            opacity: 1
        })
        gsap.to("#album-st7", {
            duration: 0.3,
            left:-60
        })
        // gsap.effects.arrowMoveTop(this.children[1]);
    });
});
document.querySelectorAll("#bt-left").forEach(function (box) {
    box.addEventListener("click", function () {
        let bar = document.querySelector(".progress-bar")
        gsap.effects.moveLeft(bar)
        gsap.to("#bt-left", {
            duration: 0.1,
            opacity: 0.2
        })
        gsap.to("#bt-right", {
            duration: 0.1,
            opacity: 1
        })
        gsap.to("#album-st7", {
            duration: 0.3,
            left:280
        })
        // gsap.effects.arrowMoveTop(this.children[1]);
    });
});

// video
function openVideo(){
    let body = document.querySelector("body")
    body.style.overflowY = "hidden"
    let stageBg = document.querySelector(".stageBg")
    let video = document.querySelector(".video-content")
    let button = document.querySelector(".closeButton")
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
    
    video.setAttribute("hidden", true)
    stageBg.setAttribute("hidden", true)
    button.setAttribute("hidden", true)
  }

  //learn more
gsap.registerEffect({
    name: "arrowMoveTop",
    defaults: {
        duration:0.2,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            y:-5,
            x:5,
            ease: Linear.easeNone,
        });
    }
})
gsap.registerEffect({
    name: "arrowMoveRight",
    defaults: {
        duration:0.2,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            left:10,
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
            y:0,
            x:0,
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
            left:0,
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