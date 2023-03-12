/**
 * @type {HTMLCanvasElement}
 */

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d')
let elementsSize;

window.addEventListener('load', setCanvasSize)
window.addEventListener('resize', setCanvasSize)

function setCanvasSize(){
    let canvasSize;
    let wHeight = window.innerHeight;
    let wWidth = window.innerWidth;

    (wHeight < wWidth)
        ? canvasSize = wHeight * 0.75
        : canvasSize = wWidth * 0.75;

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementsSize = canvasSize / 10;
    console.log(canvasSize);
    console.log(elementsSize);

    startGame();
}
    
function startGame(){    

    game.font = elementsSize + 'px Verdana'
    game.textAlign = ''

    for (let i = 0; i <= 10; i++) {
        game.fillText(emojis['X'], elementsSize * i, elementsSize )
    }

} 