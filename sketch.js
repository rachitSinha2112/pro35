var happyimg,saddog,food;
var dog,Happydog,foodS,database,foodstock;
var feedbutton,addfoodbutton;
var lastFed,fedTime;
var foodObj;
function preload()
{
	saddog=loadImage( "images/dogImg.png");
  happyimg=loadImage("images/dogImg1.png");
  
}

function setup() {
	createCanvas(1000,500);
  dog=createSprite(250,250);
  dog.addImage(saddog);
  dog.scale=0.10
 
foodObj= new Food();

  var addfoodbutton=createButton("add food"); 
  addfoodbutton.position(500,70);
addfoodbutton.mousePressed(addFood)

  var feedbutton=createButton("feed dog"); 
  feedbutton.position(400,70);
feedbutton.mousePressed(feedDog)

database=firebase.database();
foodObj.getFoodStock();
}


function draw() {  
background(46,139,87);
var fedTime=database.ref("lastFed")
fedTime.on("value",function(data){
    lastFed=data.val()
});
fill(255,255,254);
textSize(15);
if(lastFed>=12){
text("last fed:"+lastFed%12+"PM",350,30)
}else if(lastFed===0){
  text("last fed: 12 AM",350,30)
}else{
  text("last fed:"+lastFed+"AM",350,30)
}



foodObj.display();

drawSprites();
}
// function readStock(data){
 
//   foodS=data.val();
//   console.log(foodS)
// }
function WriteStock(x){
  if(x<=0){
    x=0
   }
 else{
    x=x-1
    database.ref('dog').update({
      food:x
     })
     dog.addImage(happyimg);
  } 
  
}
// function showError(){
//   console.log("error reading data")
//   }
  
function feedDog(){
dog.addImage(happyimg);
foodObj.updateFoodStock(foodObj.getFoodStock()-1)
database.ref('/').update({
 // food:foodObj.getFoodStock(),
  lastFed:hour()
})
} 
function addFood(){
  foodObj.updateFoodStock(foodObj.getFoodStock()+1)

} 


