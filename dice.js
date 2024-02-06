function generate(n) {
    let container = document.getElementById('container');
    container.innerHTML = ''; 
    for (let i = 0; i < n; i++) {
        var diceResult = Math.floor(Math.random() * 6) + 1;
        diceDisplay(diceResult, container);
    }
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