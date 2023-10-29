var v ;
mainMenu()
function mainMenu(params) {
    menu()
    v = document.getElementById('sec')
    onEnterKey()    
}
function start(inTime) {

    var timer = inTime;
    var score = 0;
    var hitRn

    document.querySelector("#pbtm").addEventListener("click",
        function (dets) {
            var clickedNumber = Number(dets.target.textContent);
            if (hitRn === clickedNumber) {
                increaseScore();
                getNewHit();
                makeBubble();
            }
        })
    function increaseScore() {
        score += 10;
        document.querySelector("#scoreValue").textContent = score;
    }
    function makeBubble() {
        var clutter = "";
        for (var i = 1; i <= 48; i++) {
            var rn = Math.floor(Math.random() * 10)
            clutter += `<div class="bubble">${rn}</div>`
        }
        document.querySelector('#pbtm').innerHTML = clutter

    }
    function runTimer() {
        var timerInt = setInterval(() => {
            if (timer > 0) {
                timer--;
                document.querySelector('#timerValue').textContent = timer
            } else {
                clearInterval(timerInt);
                document.querySelector('#pbtm').innerHTML = ` <div id="over">
                <h1>Game Over</h1>
                <h2>Your Score is ${score}</h2> 
                <button onclick="start(v.value)" >restart</button>
                <button onclick="mainMenu()">menu</button> 
                </div> `
                document.querySelector('#hitValue').textContent = '-'
               }
        }, 1000);
    }
    function getNewHit(params) {
        hitRn = Math.floor(Math.random() * 10)
        document.querySelector('#hitValue').textContent = hitRn
    }
    getNewHit();
    runTimer();
    makeBubble();

}
function getTimer() {
    var inTime = Number(document.querySelector("#sec").value)
    if (inTime != 0) {
        start(inTime)
    } else {
        v.value = 60
        start(v.value)
    }
}
function menu() {
    document.querySelector('#pbtm').innerHTML = `<div id="menuBox">
                    <h1 id="name" >Bubble Game</h1>
                    <div class="in">
                        <h3> Enter time in seconds</h3>
                    <input id = "sec" type="number" placeholder = "Default 60 sec">
                    </div>
                    <button onclick="getTimer()">start</button><br>
                    <button id="how">How to play ?</button>
                </div> `
    
                
document.getElementById('how').addEventListener('click',
function () {
    document.getElementById('rule').style.display= "block"
})

document.getElementById('exit').addEventListener('click',
function () {
    document.getElementById('rule').style.display= "none"
})



}
function onEnterKey() {
    v.addEventListener("keypress", function (ele) {
        if (ele.key === "Enter") {
            start(v.value);
        }
    })
}
