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
    top: -50,
    ease: Linear.easeNone
})

var tl1 = gsap.timeline({
    scrollTrigger: {
        start: "-500px center",
        end: "500px top",
        // start:"-50px 80%",
        // end:"100px 80%",
        // end:0,
        markers: true,
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
        toggleActions: "restart restart restart restart"
    }
})

var tlBubble = gsap.timeline({
    scrollTrigger: {
        trigger: "#area-bubble",
        toggleActions: "restart restart restart restart"
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
// gsap.from("#pills1", {
//     delay:3,
//     scrollTrigger:{
//         trigger: "#pills1",
//         toggleActions:"restart"
//     },
//     top:250
// })

// gsap.from("#pills1", {
//     delay:3,
//     scrollTrigger:{
//         trigger: "#pills1",
//         toggleActions:"restart"
//     },
//     top:250
// })


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

//section5
function changBG(id) {
    let arrayButton = ["#smartReply", "#appSugges", "#smartFolders"]
    let arrayStep = ["#bg-section5-step1", "#bg-section5-step2", "#bg-section5-step3"];
    let arrayCard = ["#card1", "#card2", "#card3"]
    console.log(typeof id)
    let index = id;
    for (let i = 0; i < 3; i++) {
        if (i !== id) {
            let step = document.querySelector(arrayStep[i]);
            step.setAttribute("hidden", "true");
            let button1 = document.querySelector(arrayButton[i])
            button1.classList.remove("button-sec6-select")
            let card = document.querySelector(arrayCard[i]);
            card.setAttribute("hidden", "true");
        } else {
            let step = document.querySelector(arrayStep[i]);
            step.removeAttribute("hidden")
            let button1 = document.querySelector(arrayButton[i])
            button1.classList.add("button-sec6-select")
            let card = document.querySelector(arrayCard[i]);
            card.removeAttribute("hidden")
        }
    }
    let step1 = document.querySelector(arrayStep[index]);

}