class Food{
constructor(){
    this.image=loadImage("images/Milk.png");
    this.foodStock=0;
    this.lastFed=0;
}
getFoodStock(){
     var foodStockRef=database.ref("dog/food")
     foodStockRef.on("value",(data)=>{
        console.log(data.val())
        this.foodStock=data.val()
     })
    }
updateFoodStock(foodData){
    database.ref('dog').update({ 
        food: foodData
    });
}
deductFood(){

}
display(){
 var x=80,y=100;
  imageMode(CENTER);
  

//console.log(this.lastFed)

 image(this.image,520,70,70,70)
if(this.foodStock!==0){
     for(var i=0;i<this.foodStock;i++){
         if(i%10===0){
           x=50;
           y=y+50;
         }
         image(this.image,x,y,60,60);
         x=x+30
     }
 }
}
}
