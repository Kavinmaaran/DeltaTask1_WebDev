var element = document.getElementsByClassName("button");
let level=1;
const scoretag = document.getElementById("scoreSpan");
var s6 = document.getElementById("s6");
var s4 = document.getElementById("s4");
let score=0;
let l1=[];
let l2=[];
var buttons
var boxes
function levelup(level){
    l1=[];
    l2=[];
    sglow(level);
    m=setInterval(() => {
        if(l2.length>=1){
            if(l2.length==l1.length){
                l2.sort()
                l1.sort()
                if(JSON.stringify(l1)==JSON.stringify(l2)){
                    score+=l1.length;
                    level+=1;
                    scoretag.innerHTML = score;
                    clearInterval(m)
                    levelup(level);
                }
                else{
                    alert("Game Over");
                        clearInterval(m)
                        level=1
                }
            }
        }
    }, 1000);
}
function glow() {
    var arr = [];
    while(arr.length < level){
        var r = Math.floor(Math.random() * boxes);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    let n = arr.pop()
    l1.push(n)
    element[n].classList.add("glow");
    setTimeout(function(){
        element[n].classList.remove("glow");
    },1000);
    return null;
}

function size4(){
    scoretag.innerHTML=0
    score=0
    document.getElementById("main").style.display="block";
    level=1
    boxes = 16
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
        });
    });
    
}

function size6(){
    scoretag.innerHTML=0
    score=0
    document.getElementById("main").style.display="block";
    level=1
    boxes = 36
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