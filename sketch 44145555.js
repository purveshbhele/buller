var wall1 , wall2 ;
var symetry ;
var car1,car2;

function setup() {
  createCanvas(400,400);
  wall1=createSprite(10,100,10,50);
  wall1.shapeColor="white";
  wall2=createSprite(10,300,10,50);
  wall2.shapeColor="white";
  
  car1=createSprite(380,100, 10,10);
  car1 .shapeColor= "white";
  car2=createSprite(380,300,10,10);
  car2.shapeColor="white";
  
  symetry=createSprite(200,200,400,5);
   symetry . shapeColor= "white"; 
   
   car1.velocityX=-3;
   car2.velocityX=-2;
   
   
}


function draw() {
  background(0); 
  if(wall1.x - car1.x < car1.width/2 + wall1.width/2) {
    
    car1.shapeColor="red";
    
       } 
       else {
        car1.velocityX= 0; 
        wall1.shapeColor="red"; 
      


       }
       if(wall2.x - car2.x < car2.width/2 + wall2.width/2) {
    
        car2.shapeColor="green";
        
           } 
           else {
            car2.velocityX= 0; 
            wall2.shapeColor="green"; 
            
          
           }
                        
  drawSprites();
  
}
