function bar4(num){
    document.getElementById("progress-bar").style.width = "0%";
    switch(num){
        case 1: document.getElementById("progress-bar-2").style.width = "6.3%";
                document.getElementById("progress-bar-2").style.left = "1029px";
                break;
        case 2: document.getElementById("progress-bar-2").style.width = "4.3%";
                document.getElementById("progress-bar-2").style.left = "1167px";
                break;
        case 3: document.getElementById("progress-bar-2").style.width = "6.4%";
                document.getElementById("progress-bar-2").style.left = "1278px";
                break;
        case 4: document.getElementById("progress-bar-2").style.width = "4.2%";
                document.getElementById("progress-bar-2").style.left = "1425px";
                document.getElementById("progress-bar").style.width = "4%";
                document.getElementById("progress-bar").style.left = "780px";
                break;
        default:    
                document.getElementById("progress-bar-2").style.width = "0%";
                break;
    
    }
}
function bar_en(num){
    bar4(4);
    switch(num){
        case 0: document.getElementById("progress-bar").style.width = "4%";
                document.getElementById("progress-bar").style.left = "780px";
                break;
        case 1: document.getElementById("progress-bar").style.width = "3.7%";
                document.getElementById("progress-bar").style.left = "890px";
                break;
        case 2: document.getElementById("progress-bar").style.width = "5.8%";
                document.getElementById("progress-bar").style.left = "993px";
                break;
        case 3: document.getElementById("progress-bar").style.width = "3.3%";
                document.getElementById("progress-bar").style.left = "1129px";
                break;
        case 4: document.getElementById("progress-bar").style.width = "3.3%";
                document.getElementById("progress-bar").style.left = "1220px";
                break;
        case 5: document.getElementById("progress-bar").style.width = "4.5%";
                document.getElementById("progress-bar").style.left = "1315px";
                break;
        default:    
                document.getElementById("progress-bar").style.width = "0%";
                document.getElementById("progress-bar-2").style.width = "0%";
                break;
    }
}
// main menu=bar move
gsap.to(".navbar-brand", {y: -55, duration: 1.0, delay: 0.5, opacity: 1});
gsap.to("#nav1", {y: 45, duration: 0.5, delay: 0.6});
gsap.to("#nav2", {y: 45, duration: 0.5, delay: 0.7});
gsap.to("#nav3", {y: 45, duration: 0.5, delay: 0.8});
gsap.to("#nav4", {y: 45, duration: 0.5, delay: 0.9});
gsap.to("#nav5", {y: 45, duration: 0.5, delay: 1.0});

// pointer main menu-bar move
gsap.to("#mProgress2", {y: 45, duration: 0.5, delay: 0.9});
gsap.to("#nav-point-2", {y: 45, duration: 0.5, delay: 0.9});

// sub menu=bar move
gsap.to("#sub1", {y: 70, duration: 0.5, delay: 1.05});
gsap.to("#sub1", {y: 70, duration: 0.5, delay: 1.1});
gsap.to("#sub2", {y: 70, duration: 0.5, delay: 1.2});
gsap.to("#sub3", {y: 70, duration: 0.5, delay: 1.3});
gsap.to("#sub4", {y: 70, duration: 0.5, delay: 1.4});
gsap.to("#sub5", {y: 70, duration: 0.5, delay: 1.5});
gsap.to("#sub6", {y: 70, duration: 0.5, delay: 1.6});
gsap.to("#sub7", {y: 70, duration: 0.5, delay: 1.7});

// pointer sub menu-bar move
gsap.to("#mProgress", {y: 45, duration: 0.5, delay: 1.0});
gsap.to("#nav-point-1", {y: 45, duration: 0.5, delay: 1.0});

gsap.to("#bg-nav", {y: 85, duration: 0.5, delay: 0.9});

// let triggerSec5  = gsap.timeline({
//         scrollTrigger: {
//                 start:"cenetr center",
//                 end:"cenetr center",
//                 markers: true,
//                 trigger: "#section5",
//                 onEnter: ({progress, direction, isActive}) => console.log(progress, direction, isActive),
//                 toggleActions: "restart restart restart restart"
//         }
//     })

window.onload = function() {
        var isCorrectDisplay = true;              
        if(window.screen.height != 1080 || window.screen.width != 1920){
                alert('Please Change Display Resolution to 1920*1080 Scale 100% and refresh')
                setTimeout(function(){
                        window.location.reload(1);
                     }, 5000);
        } 
        console.log(isCorrectDisplay +"/"+window.screen.height+"/"+window.screen.width)
        // document.body.innerHTML = '<div style="text-align: center; margin-top: 10%; font-size: 10rem; color: red; opacity: 0.2; font-weight: bold;">UNSUPPORTED</div>'
        // document.body.style = "background-color: black;"
        // document.body.innerHTML += '<marquee class="sticky-top" scrollamount="12" direction="left" \
        // style="z-index: 10000;color: red;font-family: roboto; font-size:2.5rem;position: absolute; display: flex;">\
        // Please Change Display Resolution to 1920*1080 Scale 100% and refresh</marquee>'
                
                
        
      };
