gsap.to(".hid", {y: -1, opacity: 1, duration: 0.5, delay: 1});
gsap.to(".imgb", {x: -100, opacity: 1, duration: 0.3, delay: 1.2});
gsap.to(".c1", {scale: 4.2, duration: 1.5});

var controller = new ScrollMagic.Controller();
TweenLite.defaultEase = Linear.easeNone;

var titles = document.querySelectorAll(".first-sec-box");
var tl = new TimelineMax();
tl.to(".first-sec-box", 1, {width: '120%'}, "label1");
tl.from(titles[1], 0.5, {opacity:0}, "label1+=0.5");
new ScrollMagic.Scene({
  triggerHook: "onLeave",
  duration: "400%"
})
  .setTween(tl)
  .addTo(controller);

var titleC = document.querySelectorAll(".c1");
var tc = new TimelineMax();
tc.to(".c1", 1, {y: 300}, "label1");
tc.from(titleC[1], 0.5, {opacity:0}, "label1+=0.5");
new ScrollMagic.Scene({
    triggerHook: "onLeave",
    duration: "400%"
  })
    .setTween(tc)
    .addTo(controller);
  
gsap.utils.toArray(".d1").forEach(dhov => {
    const c = document.querySelector(".c3");
    let hover = gsap.to(c, {
        scale: 5, 
        duration: 0.5,
        y: -600, 
        paused: true, 
        ease: "power1.inOut"
    });
    dhov.addEventListener("mouseenter", () => hover.play());
    dhov.addEventListener("mouseleave", () => hover.reverse());
});
gsap.utils.toArray(".d2").forEach(dhov => {
    const c = document.querySelector(".c4");
    let hover = gsap.to(c, {
        scale: 5, 
        duration: 0.5,
        y: -600, 
        paused: true, 
        ease: "power1.inOut"
    });
    dhov.addEventListener("mouseenter", () => hover.play());
    dhov.addEventListener("mouseleave", () => hover.reverse());
});
gsap.utils.toArray(".d3").forEach(dhov => {
    const c = document.querySelector(".c5");
    let hover = gsap.to(c, {
        scale: 5, 
        duration: 0.5,
        y: -600, 
        paused: true, 
        ease: "power1.inOut"
    });
    dhov.addEventListener("mouseenter", () => hover.play());
    dhov.addEventListener("mouseleave", () => hover.reverse());
});

TweenLite.defaultEase = Linear.easeNone;
var titles = document.querySelectorAll(".pmove");
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();

// create timeline
// this could also be created in a loop
tl.to(".pmain", 1, {xPercent: 2}, "label1");
tl.from(titles[1], 0.5, {opacity:0}, "label1+=0.5");
tl.to(".pmain", 1, {xPercent: -25}, "label2");
tl.from(titles[2], 0.5, {opacity:0}, "label2+=0.5");

new ScrollMagic.Scene({
  triggerHook: "onLeave",
  duration: "400%"
})
  .setTween(tl)
  .addTo(controller);
// move learn more vector right
gsap.utils.toArray(".pr").forEach(vec => {
    let hover = gsap.to(vec, {
        duration: 0.5,
        x: 10,
        paused: true, 
        ease: "easeIn"
    });
    vec.addEventListener("mouseenter", () => hover.play());
    vec.addEventListener("mouseleave", () => hover.reverse());
});
// move learn more vector top-right
gsap.utils.toArray(".pa").forEach(vec => {
    let hover = gsap.to(vec, {
        duration: 0.5,
        x: 210,
        y: -145, 
        paused: true, 
        ease: "easeIn"
    });
    vec.addEventListener("mouseenter", () => hover.play());
    vec.addEventListener("mouseleave", () => hover.reverse());
});


function nextSlide(){
    document.getElementById('hovf').style = 'margin-left:6.5%; transition-duration: 0.2s;'
    document.getElementById('progress-bar').style = 'width: 100%; transition-duration: 0.2s;'
    document.getElementById('vbar1').style = 'fill: black; transition-duration: 0.2s;'
    document.getElementById('vbar2').style = 'fill: #EAECEE; transition-duration: 0.2s;delay: 1.2s'
}

function prevSlide(){
    document.getElementById('hovf').style = 'margin-left:20%; transition-duration: 0.4s;'
    document.getElementById('progress-bar').style = 'width: 80%; transition-duration: 0.4s;'
    document.getElementById('vbar1').style = 'fill: #EAECEE; transition-duration: 0.4s;delay: 1.4s'
    document.getElementById('vbar2').style = 'fill: black; transition-duration: 0.4s;'
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
            top:-20,
            left:10,
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
            top:-17,
            left:7,
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
            left:5,
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
