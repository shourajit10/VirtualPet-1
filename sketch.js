//Create variables here
var dog, happyDog, database, foodS, foodStock
function preload()
{
  //load images here
  var dog = new dog(200 , 300)

}

function setup() {
  createCanvas(500, 500);
  
  foodStock=database.ref('Food');
  foodStock.on("value" , readStock);

  
}


function draw() {  
background(46 , 139 , 87)
  drawSprites();
  //add styles here

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  textSize=20
  text=("foodStock")
  fill("orange")
  strockWeight=10
  strock=("black")

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1;
  }
  
  database.ref('/').update({

  })
}



