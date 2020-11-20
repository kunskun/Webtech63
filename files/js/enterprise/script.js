var controller = new ScrollMagic.Controller();
TweenLite.defaultEase = Linear.easeNone;

var titles = document.querySelectorAll(".c1");
var tl = new TimelineMax();

tl.to(".c1", 1, {xPercent: 35}, "label1");
tl.from(titles[1], 0.5, {opacity:0}, "label1+=0.5");
tl.to(".c1", 1, {xPercent: 10}, "label2");
tl.from(titles[2], 0.5, {opacity:0}, "label2+=0.5");

new ScrollMagic.Scene({
  triggerHook: "onLeave",
  duration: "400%"
})
  .setTween(tl)
  .addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#p-botright", duration: 1200})
// animate color and top border in relation to scroll position
.setTween("#full-img", {scale: 0.63, x:370, y:350, delay: 0.9}) 
.addTo(controller);

  gsap.utils.toArray(".hightlight-box").forEach(box => {
    let hover = gsap.to(box, {
        duration: 0.2,
        y: -10,
        paused: true, 
        ease: Linear.easeNone
    });
    box.addEventListener("mouseenter", () => hover.play());
    box.addEventListener("mouseleave", () => hover.reverse());
});

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

titles = document.querySelectorAll(".visually-hidden");
var tl = new TimelineMax();

tl.to(".visually-hidden", 1, {xPercent: 35}, "label1");
tl.from(titles[1], 0.5, {opacity:0}, "label1+=0.5");
tl.to(".visually-hidden", 1, {xPercent: -25}, "label2");
tl.from(titles[2], 0.5, {opacity:0}, "label2+=0.5");

new ScrollMagic.Scene({
  triggerHook: "onLeave",
  duration: "400%"
})
  .setTween(tl)
  .addTo(controller);

  gsap.utils.toArray(".hightlight-box").forEach(box => {
    let hover = gsap.to(box, {
        duration: 0.2,
        y: -10,
        paused: true, 
        ease: Linear.easeNone
    });
    box.addEventListener("mouseenter", () => hover.play());
    box.addEventListener("mouseleave", () => hover.reverse());
});

var scene = new ScrollMagic.Scene({triggerElement: ".pmain", duration: 1500})
// animate color and top border in relation to scroll position
.setTween(".pmove", {xPercent:-10, delay:0.2}) // the tween durtion can be omitted and defaults to 1
.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".main-vh", duration: 1200})
// animate color and top border in relation to scroll position
.setTween(".visually-hidden2", {xPercent:-60}) // the tween durtion can be omitted and defaults to 1
.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".p-botright2", duration: 1200})
// animate color and top border in relation to scroll position
.setTween(".full-img", {scale: 0.6, x:370, y:450, delay: 0.9}) 
.addTo(controller);

var count = 0;
var vbar1 = document.getElementById('vbar1');
var vbar2 = document.getElementById('vbar2');
var progs = document.getElementById('progress-bar');
var imgsl = document.getElementById('img-slide');

function nextSlide(){
  switch(count){
    case 0:
      imgsl.style = 'margin-left:-46%; transition-duration: 0.5s;';
      progs.style = 'width: 30%; transition-duration: 0.5s;';
      vbar1.style = 'fill: black; transition-duration: 0.5s;';
      count++;
      break;
    case 1:
      imgsl.style = 'margin-left:-111%; transition-duration: 0.5s;';
      progs.style = 'width: 40%; transition-duration: 0.5s;';
      count++;
      break;
    case 2:
      imgsl.style = 'margin-left:-176%; transition-duration: 0.5s;';
      progs.style = 'width: 50%; transition-duration: 0.5s;';
      count++;
      break;
    case 3:
      imgsl.style = 'margin-left:-241%; transition-duration: 0.5s;';
      progs.style = 'width: 60%; transition-duration: 0.5s;';
      count++;
      break;
    case 4:
      imgsl.style = 'margin-left:-306%; transition-duration: 0.5s;';
      progs.style = 'width: 70%; transition-duration: 0.5s;';
      count++;
      break;
    case 5:
      imgsl.style = 'margin-left:-371%; transition-duration: 0.5s;';
      progs.style = 'width: 80%; transition-duration: 0.5s;';
      count++;
      break;
    case 6:
      imgsl.style = 'margin-left:-436%; transition-duration: 0.5s;';
      progs.style = 'width: 90%; transition-duration: 0.5s;';
      count++;
      break;
    case 7:
      imgsl.style = 'margin-left:-501%; transition-duration: 0.5s;';
      progs.style = 'width: 100%; transition-duration: 0.5s;';
      vbar2.style = 'fill: #EAECEE; transition-duration: 0.5s;';
      count++;
      break;
  }
}

function prevSlide(){
  switch(count){
    case 1:
      imgsl.style = 'margin-left:19%; transition-duration: 0.5s;';
      progs.style = 'width: 20%; transition-duration: 0.5s;';
      vbar1.style = 'fill: #EAECEE; transition-duration: 0.5s;';
      count--;
      break;
    case 2:
      imgsl.style = 'margin-left:-46%; transition-duration: 0.5s;';
      progs.style = 'width: 30%; transition-duration: 0.5s;';
      count--;
      break;
    case 3:
      imgsl.style = 'margin-left:-111%; transition-duration: 0.5s;';
      progs.style = 'width: 40%; transition-duration: 0.5s;';
      count--;
      break;
    case 4:
      imgsl.style = 'margin-left:-176%; transition-duration: 0.5s;';
      progs.style = 'width: 50%; transition-duration: 0.5s;';
      count--;
      break;
    case 5:
      imgsl.style = 'margin-left:-241%; transition-duration: 0.5s;';
      progs.style = 'width: 60%; transition-duration: 0.5s;';
      count--;
      break;
    case 6:
      imgsl.style = 'margin-left:-306%; transition-duration: 0.5s;';
      progs.style = 'width: 70%; transition-duration: 0.5s;';
      count--;
      break;
    case 7:
      imgsl.style = 'margin-left:-371%; transition-duration: 0.5s;';
      progs.style = 'width: 80%; transition-duration: 0.5s;';
      count--;
      break;
    case 8:
      imgsl.style = 'margin-left:-436%; transition-duration: 0.5s;';
      progs.style = 'width: 90%; transition-duration: 0.5s;';
      vbar2.style = 'fill: black; transition-duration: 0.5s;';
      count--;
      break;
  }
}

function nextSlide2(){
  document.getElementById('hovf2').style = 'margin-left:0%; transition-duration: 0.2s;'
  document.getElementById('progress-bar-2').style = 'width: 100%; transition-duration: 0.2s;'
  document.getElementById('vbar3').style = 'fill: black; transition-duration: 0.2s;'
  document.getElementById('vbar4').style = 'fill: #EAECEE; transition-duration: 0.2s; delay: 1.2s'
}

function prevSlide2(){
  document.getElementById('hovf2').style = 'margin-left:16%; transition-duration: 0.4s;'
  document.getElementById('progress-bar-2').style = 'width: 80%; transition-duration: 0.4s;'
  document.getElementById('vbar3').style = 'fill: #EAECEE; transition-duration: 0.4s; delay: 1.4s'
  document.getElementById('vbar4').style = 'fill: black; transition-duration: 0.4s;'
}

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

gsap.utils.toArray(".pa").forEach(vec => {
  let hover = gsap.to(vec, {
      duration: 0.5,
      x: 210,
      y: -155, 
      paused: true, 
      ease: "easeIn"
  });
  vec.addEventListener("mouseenter", () => hover.play());
  vec.addEventListener("mouseleave", () => hover.reverse());
});

gsap.utils.toArray(".po").forEach(vec => {
  let hover = gsap.to(vec, {
      duration: 0.5,
      x: 15,
      y: -60, 
      paused: true, 
      ease: "easeIn"
  });
  vec.addEventListener("mouseenter", () => hover.play());
  vec.addEventListener("mouseleave", () => hover.reverse());
});

let isVideo = ["https://www.youtube.com/embed/OIvnz7fb0p0", "https://www.youtube.com/embed/oCw3zhHGU5I", "https://www.youtube.com/embed/LNEYdxi9ygM", "https://www.youtube.com/embed/KdkBcq0o6Ic", "https://www.youtube.com/embed/UAhH21YfLP4", "https://www.youtube.com/embed/gHDP4CTfFP8", "https://www.youtube.com/embed/GWmz4QiZeQs", "https://www.youtube.com/embed/oHMLI_CALLk", "https://www.youtube.com/embed/2kuGv9GNbTQ"]

function openVideo(index){
  let body = document.querySelector("body")
  body.style.overflowY = "hidden"
  let stageBg = document.querySelector(".stageBg")
  let video = document.querySelector(".video-content")
  let button = document.querySelector(".closeButton")
  video.setAttribute("src", isVideo[index])
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
  video.removeAttribute("src")
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