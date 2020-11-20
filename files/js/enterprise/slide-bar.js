var count = 0;
var vbar1 = document.getElementById('vbar1');
var vbar2 = document.getElementById('vbar2');
var progs = document.getElementById('progress-bar');
var imgsl = document.getElementById('img-slide');

function next(){
  switch(count){
    case 0:
      imgsl.style = 'margin-left:-50%; transition-duration: 0.5s;';
      progs.style = 'width: 30%; transition-duration: 0.5s;';
      vbar1.style = 'fill: black; transition-duration: 0.5s;';
      count++;
      break;
    case 1:
      imgsl.style = 'margin-left:-115%; transition-duration: 0.5s;';
      progs.style = 'width: 40%; transition-duration: 0.5s;';
      count++;
      break;
    case 2:
      imgsl.style = 'margin-left:-180%; transition-duration: 0.5s;';
      progs.style = 'width: 50%; transition-duration: 0.5s;';
      count++;
      break;
    case 3:
      imgsl.style = 'margin-left:-246%; transition-duration: 0.5s;';
      progs.style = 'width: 60%; transition-duration: 0.5s;';
      count++;
      break;
    case 4:
      imgsl.style = 'margin-left:-310%; transition-duration: 0.5s;';
      progs.style = 'width: 70%; transition-duration: 0.5s;';
      count++;
      break;
    case 5:
      imgsl.style = 'margin-left:-375%; transition-duration: 0.5s;';
      progs.style = 'width: 80%; transition-duration: 0.5s;';
      count++;
      break;
    case 6:
      imgsl.style = 'margin-left:-440%; transition-duration: 0.5s;';
      progs.style = 'width: 90%; transition-duration: 0.5s;';
      count++;
      break;
    case 7:
      imgsl.style = 'margin-left:-505%; transition-duration: 0.5s;';
      progs.style = 'width: 100%; transition-duration: 0.5s;';
      vbar2.style = 'fill: #EAECEE; transition-duration: 0.5s;';
      count++;
      break;
  }
}

function prev(){
  switch(count){
    case 1:
      imgsl.style = 'margin-left:15%; transition-duration: 0.5s;';
      progs.style = 'width: 20%; transition-duration: 0.5s;';
      vbar1.style = 'fill: #EAECEE; transition-duration: 0.5s;';
      count--;
      break;
    case 2:
      imgsl.style = 'margin-left:-50%; transition-duration: 0.5s;';
      progs.style = 'width: 30%; transition-duration: 0.5s;';
      count--;
      break;
    case 3:
      imgsl.style = 'margin-left:-116%; transition-duration: 0.5s;';
      progs.style = 'width: 40%; transition-duration: 0.5s;';
      count--;
      break;
    case 4:
      imgsl.style = 'margin-left:-180%; transition-duration: 0.5s;';
      progs.style = 'width: 50%; transition-duration: 0.5s;';
      count--;
      break;
    case 5:
      imgsl.style = 'margin-left:-246%; transition-duration: 0.5s;';
      progs.style = 'width: 60%; transition-duration: 0.5s;';
      count--;
      break;
    case 6:
      imgsl.style = 'margin-left:-310%; transition-duration: 0.5s;';
      progs.style = 'width: 70%; transition-duration: 0.5s;';
      count--;
      break;
    case 7:
      imgsl.style = 'margin-left:-375%; transition-duration: 0.5s;';
      progs.style = 'width: 80%; transition-duration: 0.5s;';
      count--;
      break;
    case 8:
      imgsl.style = 'margin-left:-440%; transition-duration: 0.5s;';
      progs.style = 'width: 90%; transition-duration: 0.5s;';
      vbar2.style = 'fill: black; transition-duration: 0.5s;';
      count--;
      break;
  }
}