var inputBox
var startPomodoro
var timer
var gameState = "not started"
var trees_array=[]
var treesCount = 0;
var restartPomodoro;

function preload() {
  //getTime();
}

function setup() {
  createCanvas(800,400);
  inputBox = createInput("Time(in min)")
  inputBox.position(100,100);
  startPomodoro = createButton("Start")
  startPomodoro.position(120,150);
}

function draw() {
  background(255,255,255);  
  startPomodoro.mousePressed(()=>{
    inputBox.hide();
    startPomodoro.hide();
    timer = inputBox.value();
    timer=timer*100
  gameState="started"
  })  
  if(gameState==="started"&&timer>0){
    timer=timer-1
    text(timer+"seconds left",100,200);
    text(timer/60+"seconds left",100,300);
  }
  if(timer===0 && gameState==="started"){
trees_array.push(createSprite(treesCount*200,300,10,10))  
treesCount =  treesCount+1
gameState = "planted"
  }
  if(gameState==="planted"){
    text("you have planted a cute little tree!",200,200);
    // restartPomodoro = createButton("Plant another Tree!")
    // restartPomodoro.position(120,150);
  
    // restartPomodoro.mousePressed(()=>{
    //   restartPomodoro.hide();
     gameState="restart";
      
     
      inputBox = createInput("Time(in min)")
  inputBox.position(100,100);
  startPomodoro = createButton("Plant another Tree!")
  startPomodoro.position(120,150);
    //})

  }
  // if(gameState==="restart"){
    console.log(gameState);
  // gameState="started"
  //}

  
  drawSprites();
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,18);
  text(hour,100,100);
//   if(hour>=0600 && hour<=1900){
//       bg = "sprites/bg1.png";
//   }
//   else{
//       bg = "sprites/bg2.jpg";
//   }

//   backgroundImg = loadImage(bg);
//   console.log(backgroundImg);
 }