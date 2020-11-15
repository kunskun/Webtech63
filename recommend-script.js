var controller = new ScrollMagic.Controller();
TweenLite.defaultEase = Linear.easeNone;

gsap.to(".c1", {x: 1000, y: -500,opacity: 1, duration: 0.7, delay: 0.5});
gsap.to("#bg-round-anim", {x: 1050,opacity: 1, duration: 0.7, delay: 0.5});
gsap.to("#fly-text", {y: 0,opacity: 1, duration: 0.5, delay: 0.5});
gsap.to("#warp-img", {opacity: 1, duration: 0.5, delay: 1});




var scene = new ScrollMagic.Scene({triggerElement: "#p-botright", duration: 1200})
// animate color and top border in relation to scroll position
.setTween("#full-img", {scale: 0.61, x:370, y:350, delay: 0.9}) 
.addTo(controller);

//learn more
gsap.registerEffect({
    name: "arrowMoveTop",
    defaults: {
        duration:0.2,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            top:-16,
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
            top:-13,
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
  function nextSlide2(){
    document.getElementById('hovf2').style = 'margin-left:-14.5%; margin-top: 5%; transition-duration: 0.5s;'
    document.getElementById('progress-bar').style = 'width: 100%; transition-duration: 0.5s;'
    document.getElementById('vbar1').style = 'fill: black; transition-duration: 0.5s;'
    document.getElementById('vbar2').style = 'fill: #EAECEE; transition-duration: 0.5s;'
  }
  
  function prevSlide2(){
    document.getElementById('hovf2').style = 'margin-left:18%; margin-top: 5%; transition-duration: 0.5s;'
    document.getElementById('progress-bar').style = 'width: 90%; transition-duration: 0.5s;'
    document.getElementById('vbar1').style = 'fill: #EAECEE; transition-duration: 0.5s;'
    document.getElementById('vbar2').style = 'fill: black; transition-duration: 0.5s;'
  }