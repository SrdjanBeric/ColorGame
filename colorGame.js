//var colors = colorGenerator(6);
//var pickedColor = randomColor(6);
var colors;
var pickedColor;
initColors(6);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");

var messageDisplay = document.querySelector("#message");
var newColor = document.querySelector("#newColor");
var h1 = document.querySelector("h1");

var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

game();

function game(){
//inicijalizovanje igre
    colorDisplay.textContent = pickedColor;    
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";


    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor == pickedColor){
                messageDisplay.textContent = "Winner!";
                changeColors(pickedColor);
                h1.style.background = pickedColor;
            }else{
                this.style.backgroundColor = "#232323";
                //this.style.display = "none";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

easy.addEventListener("click", function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    initColors(3);
    squares[3].style.display = "none";
    squares[4].style.display = "none";
    squares[5].style.display = "none";
    game();
});

hard.addEventListener("click", function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    initColors(6);
    squares[3].style.display = "block";
    squares[4].style.display = "block";
    squares[5].style.display = "block";
    game();
});

newColor.addEventListener("click", function(){
    if(hard.classList.contains("selected"))  
        initColors(6);
    else
        initColors(3);
    game();
});

function initColors(num){
    colors = colorGenerator(num);
    pickedColor = randomColor(num);
}

function changeColors(color){
//nakon pobede, svi kvadrati postaju iste boje

    for(var i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}


function randomColor(num){
//bira se jedna od 6 boja
    
    var random = Math.floor(Math.random()*num);
    return colors[random];
}

function randomColorGenerator(num){
    var random = Math.floor(Math.random()*num);
    return random;
}

function colorGenerator(num){
    var arr = [];
    for(var i = 0; i < num; i++){    
        var r = randomColorGenerator(255);
        var g = randomColorGenerator(255);
        var b = randomColorGenerator(255);

        arr.push("rgb(" + 
        r + ", " + 
        g + ", " + 
        b + ")");
    }
    return arr;
}