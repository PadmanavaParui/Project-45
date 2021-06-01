// global variable declaration
var database;
var gameState = 0;
var playerCount;
var player, game, form;

// function setup
function setup(){
    // creating the canvas
    createCanvas(800, 800);

    // adding the database
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}
// function draw
function draw(){
    background(255);
}