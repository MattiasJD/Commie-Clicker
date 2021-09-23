let money = 0;
let btn = document.getElementById("btn");
let counter = document.getElementById("counter");
let autoOne = document.getElementById("autoOne");
let autoTwo = document.getElementById("autoTwo");
let autoThree = document.getElementById("autoThree");
let betterMouse1 = document.getElementById("betterMouse1");
let cun1 = document.getElementById("cun1");
let cun2 = document.getElementById("cun2");
let cun3 = document.getElementById("cun3");
let cun4 = document.getElementById("cun4");
let cu1 = 0;
let cu2 = 0;
let cu3 = 0;
let cu4 = 0;
let mps = document.getElementById("mps");
let mp = 0;
const d = () => {
  money = money + 1000;
  counter.innerText = money + " devizových korun";
}
let Auto;
let Auto2;
let Auto3;
const buyBetterMouse1 = () => {
    if(money >= 268000){
        money = money - 268000;
        cu4++;
        cun4.innerText = "Vlastneno " + cu4 + "x";
        const dd = () => {
            money = money + 4000;
            counter.innerText = money + " devizových korun";
        }
    }
}
btn.onclick = d;
betterMouse1.onclick = buyBetterMouse1;
const buyAutoOne = () => {
    if(money >= 100000){
        money = money - 100000;
        cu1 = cu1 + 1;
        cun1.innerText = "Vlastneno " + cu1 + "x";
        mp = mp+500;
        mps.innerText = mp + " devizových korun za sekundu"
        Auto = setInterval(() => {
            money = money + 500;
            counter.innerText = money + " devizových korun";
        }, 1000);
    }
}
autoOne.onclick = buyAutoOne;
const buyAutoTwo = () => {
    if(money >= 200000){
        money = money - 200000;
        cu2++;
        cun2.innerText = "Vlastneno " + cu2 + "x";
        mp = mp+1250;
        mps.innerText = mp + " devizových korun za sekundu"
        Auto2 = setInterval(() => {
            money = money + 1250;
            counter.innerText = money + " devizových korun";
        }, 1000);
    }
}
autoTwo.onclick = buyAutoTwo;
const buyAutoThree = () => {
    if(money >= 325000){
        money = money - 325000;
        cu3++;
        cun3.innerText = "Vlastneno " + cu3 + "x";
        mp = mp+2000;
        mps.innerText = mp + " devizových korun za sekundu"
        Auto3 = setInterval(() => {
            money = money + 2000;
            counter.innerText = money + " devizových korun";
        }, 1000);
    }
}
autoThree.onclick = buyAutoThree;
