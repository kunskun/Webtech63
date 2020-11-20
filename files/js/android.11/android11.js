console.log('Hello')
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
    top: 100,
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
    top: -500,
    ease: Linear.easeNone
})

//section5
var tweenShapeBg5 = gsap.to("#bg-shape-sec5", {
    top: -150,
    ease: Linear.easeNone,

})

//section8-3
var tweenShapeBg8_3 = gsap.to(".bg-shape-sec8", {
    top: -150,
    ease: Linear.easeNone
})


var tl1 = gsap.timeline({
    scrollTrigger: {
        start: "-500px center",
        end: "500px top",
        markers: false,
        trigger: ["#pills1"],
        toggleActions: "restart restart restart restart"
    }
})
var tl2 = gsap.timeline({
    scrollTrigger: {
        start: "-500px center",
        end: "500px top",
        markers: false,
        trigger: ["#pills1"],
        onToggle: () => {
            let phone = document.querySelector("#gifPhone1")
            phone.load()
        },
        toggleActions: "restart restart restart restart"
    }
})

var tlBubble = gsap.timeline({
    scrollTrigger: {
        trigger: "#area-bubble",
        onToggle: () => {
            let phone = document.querySelector("#gifPhone2")
            phone.load()
        },
        toggleActions: "restart restart restart restart",
    }
})

tl1.from("#pills1", {
    delay: 1,
    top: 250
})
tl2.from("#pills3", {
    delay: 1,
    top: 250
});

tlBubble.to("#area-bubble", {
    delay: 1,
    xPercent: 130
})


// build scean
//section 1
myScene(tweenCircle, 2000, "#multiDirect")
myScene([tweenBg11, tweenPhone2], 900, "#multiDirect")
myScene(tweenPhone3, 1700, "#multiDirect")
myScene(tweenShapeHL, 500, "#bg-shape-hightlight")
myScene(tweenShapeBg5, 500, "#bg-shape-sec5")
myScene(tweenShapeBg8_3, 500, ".bg-shape-sec8")



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

document.querySelectorAll(".hightlight-box").forEach(function(box) {
    box.addEventListener("mouseenter", function() {
        gsap.effects.boxEnter(this);
    });
});

document.querySelectorAll(".hightlight-box").forEach(function(box) {
    box.addEventListener("mouseleave", function() {
        gsap.effects.boxOut(this);
    });
});

//section5
let currentId = 0;

let gsapBg1 = gsap.timeline({
    scrollTrigger: {
        start: "-350px center",
        end: "700px top",
        markers: false,
        trigger: "#smartReply",
        onToggle: () => {
            let phone = document.querySelector("#gifPhone3")
            phone.load()
            console.log('phone3')
        },
        toggleActions: "restart restart restart restart"
    }
})


gsapBg1.from("#bg-section5-step1", {
    duration: 2,
    left: -1700,
    ease: Power1.easeOut

})

let gsapBg2 = gsap.timeline().from(".bg-app-circle", {
    opacity: 0,
    y: 500,
    duration: 1,
    stagger: 0.3,
    ease: "back"
}).to("#app5", {
    delay: 0,
    y: 800,
    opacity: 0,
    duration: 2,
    ease: "back"
})

let gsapBg2_1 = gsap.timeline().from("#app6", {
    opacity: 0,
    delay: 2,
    y: -500,
    duration: 1,
    ease: "back"
})
let gsapBg3 = gsap.from(".bg-smart-ring", {
    scale: 3,
    duration: 1,
    ease: Power1.easeOut
})



function changBG(id) {
    let arrayButton = ["#smartReply", "#appSugges", "#smartFolders"]
    let arrayStep = ["#bg-section5-step1", "#bg-section5-step2", "#bg-section5-step3"];
    let arrayCard = ["#card1", "#card2", "#card3"]
    let arrayPhone = ["#phone-1", "#phone-2", "#phone-3"]
    console.log(typeof id)

    if (id === currentId) {
        console.log('pass')
    } else {
        if (id == 0) {
            gsapBg1.restart();
        } else if (id == 1) {

            gsapBg2.restart()
            gsapBg2_1.restart()

        } else if (id == 2) {
            gsapBg3.restart()
        }
        currentId = id;

        for (let i = 0; i < 3; i++) {
            if (i !== id) {
                let step = document.querySelector(arrayStep[i]);
                step.setAttribute("hidden", "true");
                let button1 = document.querySelector(arrayButton[i])
                button1.classList.remove("button-sec6-select")
                button1.style.backgroundColor = "White"
                button1.style.color = "#073042"
                let card = document.querySelector(arrayCard[i]);
                card.setAttribute("hidden", "true");
                let phone = document.querySelector(arrayPhone[i]);
                phone.setAttribute("hidden", "true");

                gsap.to(arrayPhone[i], {
                    duration: 1,
                    opacity: 0
                })
                gsap.from(arrayCard[i], { //การ์ด
                    top: 0,
                    ease: Linear.easeNone
                })

            } else {
                let step = document.querySelector(arrayStep[i]);
                step.removeAttribute("hidden")
                let button1 = document.querySelector(arrayButton[i])
                button1.classList.add("button-sec6-select")
                let card = document.querySelector(arrayCard[i]);
                card.removeAttribute("hidden")
                let phone = document.querySelector(arrayPhone[i]);
                phone.removeAttribute("hidden")
                gsap.to(arrayPhone[i], {
                    duration: 1,
                    opacity: 1
                })
                gsap.from(arrayCard[i], {
                    duration: 1,
                    opacity: 0,
                    top: 500,
                    ease: Linear.easeNone
                })
            }
        }
    }

}



gsap.registerEffect({
    name: "buttonEnter",
    defaults: {
        duration: 0.3,
        ease: Linear.easeNone,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            backgroundColor: "#073042",
            color: "white",
            ease: Linear.easeNone,
        });
    }
});
gsap.registerEffect({
    name: "buttonOut",
    defaults: {
        duration: 0.3,
        ease: Linear.easeNone
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            backgroundColor: "white",
            color: "#073042",
            ease: Linear.easeNone,
        });
    }
})

document.querySelectorAll(".button-sec6").forEach(function(box) {
    box.addEventListener("mouseover", function() {
        gsap.effects.buttonEnter(this);
    });
});

document.querySelectorAll(".button-sec6").forEach(function(box) {
    let arrayButton = ["smartReply", "appSugges", "smartFolders"]
    box.addEventListener("mouseout", function() {
        console.log(box.id)
        if (box.id != arrayButton[currentId]) {
            gsap.effects.buttonOut(this);
        }
    });
});

//section7
function openVideo() {
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

//section8-1
var tlPhone4 = gsap.timeline({
    scrollTrigger: {
        markers: false,
        trigger: "#gifPhone4",
        toggleActions: "restart restart restart restart",
        onToggle: () => {

            let phone = document.querySelector("#gifPhone4")
            phone.load()
        },

    },
    onComplete: () => { console.log('2222') }
})
tlPhone4.to("#bg-sec8-2", {
    delay: 5,
    duration: 5,
    opacity: 0,
    //backgroundImage: 'url("https://lh3.googleusercontent.com/KnHPBdPPbwCLYpnpto2o_my-AgcQa4y84dRqxJ-zaPr8X5w3JgdiaJKCXPguOpy83q8kY2QA313OcCmN7jMQdDWjlZbsdUtpYlJQ=w937-rw-e365-v1")'
})

// section8-2

let scrollSec8_2 = gsap.timeline({
    scrollTrigger: {
        start: "-350px center",
        end: "700px top",
        markers: false,
        trigger: "#bg-bubble-sec8-2",
        toggleActions: "restart restart restart restart",
        onToggle: () => {
            console.log("Phone5")
            let phone = document.querySelector("#gifPhone5")
                // phone.currentTime = 0
            phone.load()
            console.log(phone.currentTime)
        },
    }
})

scrollSec8_2.from(".internal-circle-layer2", {
    duration: 2,
    strokeDashoffset: 220,
    ease: Power1.easeOut,
    strokeDasharray: 100

})

//section8-3
let scrollSec8_3 = gsap.timeline({
    scrollTrigger: {
        start: "-350px center",
        end: "700px top",
        markers: false,
        trigger: ".bg-st8-2",
        toggleActions: "restart restart restart restart"
    }
})

scrollSec8_3.from(["#popup-auto", "#popup-onetime"], {
    duration: 0.5,
    scale: 0,
    ease: Power1.easeOut,
})


var tlVideoSec8 = gsap.timeline({
    scrollTrigger: {
        markers: false,
        trigger: "#video-sec8",
        toggleActions: "restart restart restart restart",
        onToggle: () => {

            let phone = document.querySelector("#video-sec8")
            phone.load()
        },

    },
    onComplete: () => { console.log('2222') }
})

//section9 
let gsapBgWave = gsap.timeline().from(".bg-wave", {
    repeat: -1,
    opacity: 1,
    scale: 0,
    duration: 5,
    stagger: {
        each: 0.6,
        opacity: 0,
        from: "center",
        yoyo: true,
    },

    ease: Power1.easeOut,
})

// section11
gsap.registerEffect({
    name: "st11ClickDrop",
    defaults: {
        duration: 0.3,
        ease: Linear.easeNone,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            height: 0,
            ease: Linear.easeNone,
        });
    }
});
var lastHeight
gsap.registerPlugin()
gsap.registerEffect({
    name: "st11ClickUp",
    defaults: {
        duration: 0.3,
        ease: Linear.easeNone,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            height: lastHeight,
            ease: Linear.easeNone,
        });
    }
});

let jsonHeight = {
    "#st11-stage1": 250,
    "#st11-stage2": 250,
    "#st11-stage3": 200,
    "#st11-stage4": 400,
    "#st11-stage5": 250,
    "#st11-stage6": 500,
    "#st11-stage7": 650,
    "#st11-stage8": 800,
}

document.querySelectorAll(".drop-head").forEach(function(box) {
    box.addEventListener("click", function() {
        let target = document.querySelector(this.getAttribute("value"))
        console.log(target.offsetHeight)
        if (target.offsetHeight == 0) {
            lastHeight = jsonHeight[this.getAttribute("value")];
            console.log(lastHeight)
            gsap.effects.st11ClickUp(target).reverse;
            gsap.to(this.children[1].children[0], {

                rotation: "-135_cw"

            })

        } else {
            gsap.effects.st11ClickDrop(target);
            gsap.to(this.children[1].children[0], {
                rotation: "45_ccw"

            })
        }

    });
});

//learn more
gsap.registerEffect({
    name: "arrowMoveTop",
    defaults: {
        duration: 0.2,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            top: -40,
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
            top: -35,
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
document.querySelectorAll(".learnMore").forEach(function(box) {
    box.addEventListener("mouseenter", function() {
        gsap.effects.arrowMoveTop(this.children[1]);
    });
});
document.querySelectorAll(".learnMore").forEach(function(box) {
    box.addEventListener("mouseleave", function() {
        gsap.effects.arrowMoveOut(this.children[1]);
    });
});
document.querySelectorAll(".learnMore2").forEach(function(box) {
    box.addEventListener("mouseenter", function() {
        gsap.effects.arrowMoveRight(this.children[1]);
    });
});
document.querySelectorAll(".learnMore2").forEach(function(box) {
    box.addEventListener("mouseleave", function() {
        gsap.effects.arrowMoveOut2(this.children[1]);
    });
});

// document.querySelectorAll(".button-sec6").forEach(function (box) {
//     let arrayButton = ["smartReply", "appSugges", "smartFolders"]
//     box.addEventListener("mouseout", function () {
//         console.log(box.id)
//         if (box.id != arrayButton[currentId]) {
//             gsap.effects.buttonOut(this);
//         }
//     });
// });