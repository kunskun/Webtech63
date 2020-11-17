var controller = new ScrollMagic.Controller();
var controller2 = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#p-botright", duration: 1200})
// animate color and top border in relation to scroll position
.setTween("#full-img", {scale: 0.63, x:370, y:350, delay: 0.9}) 
.addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: "#p-botright2", duration: 1200})
// animate color and top border in relation to scroll position
.setTween("#full-img2", {scale: 0.63, x:370, y:350, delay: 0.9}) 
.addTo(controller2);

var controller = new ScrollMagic.Controller();
TweenLite.defaultEase = Linear.easeNone;

titles = document.querySelectorAll(".visually-hidden");
var tl = new TimelineMax();

tl.to(".visually-hidden", 1, {xPercent: 10}, "label1");
tl.from(titles[1], 0.5, {opacity:0}, "label1+=0.5");
tl.to(".visually-hidden", 1, {xPercent: 0}, "label2");
tl.from(titles[2], 0.5, {opacity:0}, "label2+=0.5");

new ScrollMagic.Scene({
  triggerHook: "onLeave",
  duration: "400%"
})
  .setTween(tl)
  .addTo(controller);

let count = 0;

function switchC(obj){
    if(obj.id == "btn2"){
        document.getElementById('color').setAttribute('class', 'anim-1 circle4')
        document.getElementById('btn2').setAttribute('style', 'font-size:12px;color: #000;margin-top: 550px;display: inline-block;margin-left: 10px;color: #000')
        document.getElementById('btn1').setAttribute('style', 'font-size:12px;color: #000;margin-top: 550px;display: inline-block;margin-left: 10px;color: #fff')
        document.getElementById("pic2").setAttribute('style', "position: absolute;margin-left: -220px;display: none;")
        document.getElementById("pic1").setAttribute('style', "position: absolute;margin-left: -220px;display:defalut;")
    } else if (obj.id == "btn1"){
        document.getElementById('color').setAttribute('class', 'anim-2 circle4')
        document.getElementById('btn1').setAttribute('style', 'font-size:12px;color: #000;margin-top: 550px;display: inline-block;margin-left: 10px;color: #000')
        document.getElementById('btn2').setAttribute('style', 'font-size:12px;color: #000;margin-top: 550px;display: inline-block;margin-left: 10px;color: #fff')
        document.getElementById("pic1").setAttribute('style', "position: absolute;margin-left: -220px;display: none;")
        document.getElementById("pic2").setAttribute('style', "position: absolute;margin-left: -220px;display:defalut;")
    }
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

function toLeft(obj){
    let x = obj.id
    document.getElementById(`arrow${x}`).setAttribute('class', 'arrow-move-left')
}

function toRight(obj){
    let x = obj.id
    document.getElementById(`arrow${x}`).setAttribute('class', 'arrow-move-right')
}
