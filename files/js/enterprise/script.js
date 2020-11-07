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
  // document.getElementById('img-slide').style = 'margin-left:20%; transition-duration: 0.5s;'
  // document.getElementById('progress-bar').style = 'width: 90%; transition-duration: 0.5s;'
  // document.getElementById('vbar1').style = 'fill: #EAECEE; transition-duration: 0.5s;'
  // document.getElementById('vbar2').style = 'fill: black; transition-duration: 0.5s;'
}
