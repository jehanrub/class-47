var gameState=0 
var form,game
var score = 0
var choice1, choice2, choice3, choice4
var database
function setup(){
    createCanvas(1000,500)
    database=firebase.database()
    game=new Game()
    game.start();
}



function draw (){
    background('lightgreen')
}














