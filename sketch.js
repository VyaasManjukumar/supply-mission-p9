var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	var ground;
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 var options={

		isStatic : true
	 }
	leftSide =Bodies.rectangle(300,635,10,40,options);
	World.add(world,leftSide);
	
	var options={

		isStatic : true
	 }
	bottomSide =Bodies.rectangle(360,640,110,10,options);
	World.add(world,bottomSide);

    var options={

		isStatic : true
	 }
    rightSide =Bodies.rectangle(420,635,10,40,options);
	World.add(world,rightSide);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  fill("red");
  rect(leftSide.position.x,leftSide.position.y,10,40);
  rect(bottomSide.position.x,650,110,10);
  rect(rightSide.position.x,rightSide.position.y,10,40);

  drawSprites();
 keypressed()
}
function keypressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
	
  
  }
}



