let money = 0;
let btn = document.getElementById("btn");
let counter = document.getElementById("counter");
let autoOne = document.getElementById("autoOne");
let autoTwo = document.getElementById("autoTwo");
let autoThree = document.getElementById("autoThree");
let autoFour = document.getElementById("autoFour");
let betterMouse1 = document.getElementById("betterMouse1");
let betterMouse2 = document.getElementById("betterMouse2");
let cun1 = document.getElementById("cun1");
let cun2 = document.getElementById("cun2");
let cun3 = document.getElementById("cun3");
let cun4 = document.getElementById("cun4");
let cun5 = document.getElementById("cun5");
let cun6 = document.getElementById("cun6");
let cu1 = 0;
let cu2 = 0;
let cu3 = 0;
let cu4 = 0;
let cu5 = 0;
let cu6 = 0;
let mps = document.getElementById("mps");
let mp = 0;
let close = document.getElementById("close");
close.onclick=popup;
function popup(){
    document.getElementById("info").style.display = "none";
}
let mpc = 0;
function d() {
        money = money + (1000+mpc);
        counter.innerText = money + " devizových korun";
}

function buyBetterMouse1() {
    if (money >= 268000) {
        money = money - 268000;
        cu4=cu4+1;
        cun4.innerText = "Vlastněno " + cu4 + "x";
        mpc = mpc + 500;
    }
}
betterMouse1.onclick = buyBetterMouse1;
function buyBetterMouse2() {
    if (money >= 600000) {
        money = money - 600000;
        cu5=cu5+1;
        cun5.innerText = "Vlastněno " + cu5 + "x";
        mpc = mpc + 2000;
    }
}
betterMouse2.onclick = buyBetterMouse2;

function buyAutoOne() {
    if (money >= 100000) {
        money = money - 100000;
        cu1 = cu1 + 1;
        cun1.innerText = "Vlastněno " + cu1 + "x";
        mp = mp + 200;
        mps.innerText = mp + " devizových korun za sekundu";
    }
}
autoOne.onclick = buyAutoOne;

function buyAutoTwo() {
    if (money >= 200000) {
        money = money - 200000;
        cu2++;
        cun2.innerText = "Vlastněno " + cu2 + "x";
        mp = mp + 422;
        mps.innerText = mp + " devizových korun za sekundu"
    }
}
autoTwo.onclick = buyAutoTwo;

function buyAutoThree() {
    if (money >= 325000) {
        money = money - 325000;
        cu3++;
        cun3.innerText = "Vlastněno " + cu3 + "x";
        mp = mp + 1000;
        mps.innerText = mp + " devizových korun za sekundu"
    }
}
autoThree.onclick = buyAutoThree;

function buyAutoFour() {
    if (money >= 680000) {
        money = money - 680000;
        cu6++;
        cun6.innerText = "Vlastněno " + cu6 + "x";
        mp = mp + 2200;
        mps.innerText = mp + " devizových korun za sekundu"
    }
}
autoFour.onclick = buyAutoFour;

function timer(){
    money = money + mp;
    counter.innerText = money + " devizových korun";
}
setInterval(timer, 1000)

let datum = new Date (1987, 0, 1,);
let y = datum.getFullYear();
let m = 1;
let dd = datum.getDay();
function time(){
    dd = dd+1;
    if(dd>=31){
        dd = 1;
        m = m +1;
    }
    if(m>=12&&dd>=30){
        m = 1;
        y = y +1;
    }
    if( m === 12&& y === 1989 && dd === 10){
        endgame();
    }
    document.getElementById("date").innerText = dd +"."+ m +"."+ y;
}
function endgame (){
    document.getElementById("end").style.display = "block";
    document.getElementById("lovaky").innerHTML=money+" devizových korun.";
}

setInterval(time, 1000)

btn.onclick = d;