const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drop;
var manImg , dogImg;

function preload(){

    manImg = loadImage("man.png")
   dogImg = loadImage("dog.png")

}

function setup(){
   
    var canvas = createCanvas(1800,500);
    engine = Engine.create();
    world = engine.world;

   var man = new Box(100,2,70,70);
   var dog = new Box(900,2,50,50);   

}

function draw(){
    
    background("blue");

    Drops.display();
   dog.display();
manImg.display();


if(man.isTouching(dog)){
    text("GOOD JOB! YOU SAVED THE POOR LIL PUP.");
    Fill("red");
    stroke("black");
}



}   

