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

