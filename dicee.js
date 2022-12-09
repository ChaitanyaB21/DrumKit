// console.log('Hello World')
var a = Math.floor(Math.random()*6) + 1;
var b = Math.floor(Math.random()*6) + 1;


if(a===1){
    document.querySelector('.img1').classList.add('dice1');
}
if(a===2){
    document.querySelector('.img1').classList.add('dice2');
}
if(a===3){
    document.querySelector('.img1').classList.add('dice3');
}
if(a===4){
    document.querySelector('.img1').classList.add('dice4');
}
if(a===5){
    document.querySelector('.img1').classList.add('dice5');
}
if(a===6){
    document.querySelector('.img1').classList.add('dice6');
}

if(b===1){
    document.querySelector('.img2').classList.add('dice1');
}
if(b===2){
    document.querySelector('.img2').classList.add('dice2');
}
if(b===3){
    document.querySelector('.img2').classList.add('dice3');
}
if(b===4){
    document.querySelector('.img2').classList.add('dice4');
}
if(b===5){
    document.querySelector('.img2').classList.add('dice5');
}
if(b===6){
    document.querySelector('.img2').classList.add('dice6');
}

if(a>b){
    document.querySelector('.container h1').innerHTML = 'Player 1 won';
}
if(a<b){
    document.querySelector('.container h1').innerHTML = 'Player 2 won';
}
if(a===b){
    document.querySelector('.container h1').innerHTML = 'Tie';
}