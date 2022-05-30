var element = document.getElementsByClassName("button");
let level=1;
const scoretag = document.getElementById("scoreSpan");
const leveltag = document.getElementById("levelSpan");
var s6 = document.getElementById("s6");
var s4 = document.getElementById("s4");
let score=0;
let l1=[];
let l2=[];
var buttons
var boxes
let arr = [];
let l4=[]
let l3=[]

function levelup(level){
    l1.push(arr.pop())
    l2=[];
    l3=[];
    for (i = 0; i < l1.length; i++) {
        l4[i] = l1[i];
    }
    l4.reverse()
    sglow(level);
    m=setInterval(() => {
        if(l2.length>=1){
            if(l2.length==l3.length){
                l2.sort()
                l3.sort()
                if(JSON.stringify(l3)==JSON.stringify(l2)){
                    score+=l3.length;
                    level+=1;
                    scoretag.innerHTML = score;
                    leveltag.innerHTML = level;
                    clearInterval(m)
                    levelup(level);
                }
                else{
                    alert("Game Over!!! Try Again");
                        clearInterval(m)
                        level=1
                        location.reload()
                }
            }
            else if( l2.length>l3.length){
                alert("Game Over!!! Try Again");
                clearInterval(m)
                level=1
                location.reload()
            }
        }
    }, 1000);
}
function glow() {
    let q = l4.pop()
    l3.push(q)
    element[q].classList.add("glow");
    setTimeout(function(){
        element[q].classList.remove("glow");
    },1000);
    return null;
}

function size4(){
    document.getElementById('s6').style.display="none"
    document.getElementById('level').style.display="block"
    boxes = 16
    while(arr.length < boxes){
        var r = Math.floor(Math.random() * boxes);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    scoretag.innerHTML=0
    score=0
    document.getElementById("main").style.display="block";
    level=1
    const block = document.getElementById('grid')
    block.style.gridTemplateColumns = "repeat(4,1fr)";
    var child = block.lastElementChild; 
    while (child) {
        block.removeChild(child);
        child = block.lastElementChild;
    }
    for (let i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.className = 'button';
        div.id = i;
        div.style.height="100px"
        block.appendChild(div);
    }
    buttons = Array.from(document.getElementsByClassName('button'));
    levelup(1)
    buttons.map( button => {
        button.addEventListener('click', (e) => {
            l2.push(Number(button.id))
            var audio = new Audio('src/mixkit-arcade-game-jump-coin-216.wav');
            audio.play();
        });
    });
    
}

function size6(){
    document.getElementById('s4').style.display="none"
    boxes = 36
    while(arr.length < boxes){
        var r = Math.floor(Math.random() * boxes);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    scoretag.innerHTML=0
    score=0
    document.getElementById("main").style.display="block";
    level=1
    const block6 = document.getElementById('grid')
    block6.style.gridTemplateColumns = "repeat(6,1fr)";
    var child = block6.lastElementChild; 
    while (child) {
        block6.removeChild(child);
        child = block6.lastElementChild;
    }
    for (let i = 0; i < 36; i++) {
        const div = document.createElement('div');
        div.className = 'button';
        div.style.height="66.66px"
        div.id = i;
        block6.appendChild(div);
    }
    levelup(1)
    buttons = Array.from(document.getElementsByClassName('button'));
    buttons.map( button => {
        button.addEventListener('click', (e) => {
            l2.push(Number(button.id))
            var audio = new Audio('src/mixkit-arcade-game-jump-coin-216.wav');
            audio.play();
        });
    });
}

function sglow(i) {
    document.getElementById('main').style.pointerEvents = 'none'; 
    let a = setInterval(() => {
        glow();
    }, 1000);
    setTimeout(function(){
        clearInterval(a)
        document.getElementById('main').style.pointerEvents = 'auto'; 
    },i*1000);
    return null;
}

s6.onclick = function() {size6()};
s4.onclick = function() {size4()};
