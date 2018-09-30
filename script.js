window.onload = init;

let canvas, cxt;
let rectangleX = 0;

function init(){
    console.log('Page is loaded.');
    
    canvas = document.querySelector("#myCanvas");
    cxt = canvas.getContext('2d');
    
    requestAnimationFrame (animate);
}

function animate(){
    //1 Clear canvas
    cxt.clearRect(0, 0, canvas.width, canvas.height);
    
    //2 Draw some shape
    cxt.fillStyle = 'red'; 
    cxt.fillRect(rectangleX, 0, 10, 10);
    
    //3 Move the shape
    rectangleX = rectangleX + 1;
    
}