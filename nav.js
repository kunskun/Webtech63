function bar4(num){
    document.getElementById("progress-bar").style.width = "0%";
    switch(num){
        case 1: document.getElementById("progress-bar-2").style.width = "6.3%";
                document.getElementById("progress-bar-2").style.left = "1025px";
                break;
        case 2: document.getElementById("progress-bar-2").style.width = "4.2%";
                document.getElementById("progress-bar-2").style.left = "1165px";
                break;
        case 3: document.getElementById("progress-bar-2").style.width = "6.4%";
                document.getElementById("progress-bar-2").style.left = "1275px";
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
                document.getElementById("progress-bar").style.left = "988px";
                break;
        case 3: document.getElementById("progress-bar").style.width = "3.3%";
                document.getElementById("progress-bar").style.left = "1125px";
                break;
        case 4: document.getElementById("progress-bar").style.width = "3.3%";
                document.getElementById("progress-bar").style.left = "1217px";
                break;
        case 5: document.getElementById("progress-bar").style.width = "4.5%";
                document.getElementById("progress-bar").style.left = "1310px";
                break;
        default:    
                document.getElementById("progress-bar").style.width = "0%";
                break;
    
    }
}