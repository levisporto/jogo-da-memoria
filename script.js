
// shuffle mechanic by stackoverflow
function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }
  
  // Used like so
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  shuffle(arr);
  






function startGame(){
    document.getElementById('start').style.display = 'none';
};


function turn1(){
    document.getElementById('1').style.backgroundImage = `url('img/${arr[0]}.jpg')`;
}

function turn2(){
    document.getElementById('2').style.backgroundImage = `url('img/${arr[1]}.jpg')`;
}
function turn3(){
    document.getElementById('3').style.backgroundImage = `url('img/${arr[2]}.jpg')`;
}
function turn4(){
    document.getElementById('4').style.backgroundImage = `url('img/${arr[3]}.jpg')`;
}
function turn5(){
    document.getElementById('5').style.backgroundImage = `url('img/${arr[4]}.jpg')`;
}
function turn6(){
    document.getElementById('6').style.backgroundImage = `url('img/${arr[5]}.jpg')`;
}
function turn7(){
    document.getElementById('7').style.backgroundImage = `url('img/${arr[6]}.jpg')`;
}
function turn8(){
    document.getElementById('8').style.backgroundImage = `url('img/${arr[7]}.jpg')`;
}
function turn9(){
    document.getElementById('9').style.backgroundImage = `url('img/${arr[8]}.jpg')`;
}
function turn10(){
    document.getElementById('10').style.backgroundImage = `url('img/${arr[9]}.jpg')`;
}

function turn11(){
    document.getElementById('11').style.backgroundImage = `url('img/${arr[10]}.jpg')`;
}

function turn12(){
    document.getElementById('12').style.backgroundImage = `url('img/${arr[11]}.jpg')`;
}

function turn13(){
    document.getElementById('13').style.backgroundImage = `url('img/${arr[12]}.jpg')`;
}

function turn14(){
    document.getElementById('14').style.backgroundImage = `url('img/${arr[13]}.jpg')`;
}

function turn15(){
    document.getElementById('15').style.backgroundImage = `url('img/${arr[14]}.jpg')`;;
}
