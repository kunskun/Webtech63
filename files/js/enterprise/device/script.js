 let x = 3;
 let count = 0;

 var controller = new ScrollMagic.Controller();
 TweenLite.defaultEase = Linear.easeNone;

 titles = document.querySelectorAll(".visually-hidden");
 var tl = new TimelineMax();

 tl.to(".visually-hidden", 1, { yPercent: -50 }, "label1");
 tl.from(titles[1], 0.5, { opacity: 1 }, "label1+=0.5");
 tl.to(".visually-hidden", 1, { yPercent: 100 }, "label2");
 tl.from(titles[2], 0.5, { opacity: 1 }, "label2+=0.5");

 new ScrollMagic.Scene({
         triggerHook: "onLeave",
         duration: "400%"
     })
     .setTween(tl)
     .addTo(controller);

 var controller = new ScrollMagic.Controller();
 TweenLite.defaultEase = Linear.easeNone;

 titles = document.querySelectorAll(".visually-hidden-1");
 var tl = new TimelineMax();

 tl.to(".visually-hidden-1", 1, { yPercent: -100 }, "label1");
 tl.from(titles[1], 0.5, { opacity: 1 }, "label1+=0.5");
 tl.to(".visually-hidden-1", 1, { yPercent: 100 }, "label2");
 tl.from(titles[2], 0.5, { opacity: 1 }, "label2+=0.5");

 new ScrollMagic.Scene({
         triggerHook: "onLeave",
         duration: "400%"
     })
     .setTween(tl)
     .addTo(controller);

 function toLeft(obj) {
     let x = obj.id
     document.getElementById(`arrow${x}`).setAttribute('class', 'arrow-move-left')
 }

 function toRight(obj) {
     let x = obj.id
     document.getElementById(`arrow${x}`).setAttribute('class', 'arrow-move-right')
 }

 function prevSlide(obj) {
     if (count > 0) {
         document.getElementById('slide5').setAttribute('style', 'position: absolute;margin-top: 5%;margin-left: 15%;transition-duration: 0.5s;')
         document.getElementById('bar5').setAttribute('style', 'width: 90%;transition-duration: 0.5s;')
         count--;
     }

 }

 function nextSlide(obj) {
     if (count == 0) {
         document.getElementById('slide5').setAttribute('style', 'position: absolute;margin-top: 5%;margin-left: 0%;transition-duration: 0.5s;')
         document.getElementById('bar5').setAttribute('style', 'width: 100%;transition-duration: 0.5s;')
         count++;
     }
 }

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

 function test(obj) {
     document.getElementById(`circle${+obj}`).setAttribute('class', 'circle-1')
 }

 function test2(obj) {
     document.getElementById(`circle${+obj}`).setAttribute('class', 'circle-2')
 }




 function toDiagonalTop(obj){
    let x = obj.id
    document.getElementById(`arrow${x}`).setAttribute('class', 'arrow-move-top')
    document.getElementById(`ddd`).setAttribute('style', 'transform:rotate(-45deg)')
}

function toDiagonalDown(obj){
    let x = obj.id
    document.getElementById(`arrow${x}`).setAttribute('class', 'arrow-move-down')
    document.getElementById(`ddd`).setAttribute('style', 'transform:rotate(-45deg)')
}