var rollTime = 1
var dice = []

function rollAll(){
    rollTime = 1;
    generate('container1');
    generate('container2');
    generate('container3');
    generate('container4');
    generate('container5');
}
function generate(container) {
    let c = document.getElementById(container);
    c.innerHTML = ''; 
    var diceResult = Math.floor(Math.random() * 6) + 1;
    switch(container) {
        case 'container1': dice[0] = diceResult; break;
        case 'container2': dice[1] = diceResult; break;
        case 'container3': dice[2] = diceResult; break;
        case 'container4': dice[3] = diceResult; break;
        case 'container5': dice[4] = diceResult; break;
    }
    diceDisplay(diceResult, c);
}
function diceDisplay(dice, container) {
    let diceHTML = '';
    switch(dice) {
        case 1: diceHTML = DiceOne(); break;
        case 2: diceHTML = DiceTwo(); break;
        case 3: diceHTML = DiceThree(); break;
        case 4: diceHTML = DiceFour(); break;
        case 5: diceHTML = DiceFive(); break;
        case 6: diceHTML = DiceSix(); break;
    }
    container.innerHTML += diceHTML;
}
function DiceOne(){
    return('<div class="dice"><div class="dot middle"></div></div>')
}
function DiceTwo(){
    return('<div class="dice"><div class="dot left-top"></div><div class="dot right-bottom"></div></div>')
}
function DiceThree(){
    return('<div class="dice"><div class="dot left-top"></div><div class="dot right-bottom"></div><div class="dot middle"></div></div>')
}
function DiceFour(){
    return('<div class="dice"><div class="dot left-top"></div><div class="dot left-bottom"></div><div class="dot right-top"></div><div class="dot right-bottom"></div></div>')
}
function DiceFive(){
    return('<div class="dice"><div class="dot left-top"></div><div class="dot left-bottom"></div><div class="dot middle"></div><div class="dot right-top"></div><div class="dot right-bottom"></div></div>')
}
function DiceSix(){
    return('<div class="dice"><div class="dot left-top"></div><div class="dot left-bottom"></div><div class="dot left-middle"></div><div class="dot right-top"></div><div class="dot right-bottom"></div><div class="dot right-middle"></div></div>')
}
function executeFunction() {
    rollTime +=1;
    if(rollTime > 3){
        window.prompt("no roll times")
        return 
    }
    var checkboxes = document.getElementsByName('options');
    for(var i=0, n=checkboxes.length; i<n; i++) {
        if(checkboxes[i].checked) {
            switch(checkboxes[i].value) {
                case 'option1':
                    generate('container1');
                    break;
                case 'option2':
                    generate('container2');
                    break;
                case 'option3':
                    generate('container3');
                    break;
                case 'option4':
                    generate('container4');
                    break;
                case 'option5':
                    generate('container5');
                    break;
            }
        }
    }
}