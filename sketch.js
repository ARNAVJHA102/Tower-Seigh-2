const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(390,250,300,20);

    box1 = new Box(330,235);
    box2 = new Box(360,235);
    box3 = new Box(390,235);
    box4 = new Box(420,235);
    box5 = new Box(450,235);

    box6 = new Box(360,195);
    box7 = new Box(390,195);
    box8 = new Box(420,195);

    box9 = new Box(390,155);

    

    polygon = new Polygon(50,50);


    
    slingshot = new SlingShot(polygon.body,{x:50, y:50});
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    
    box9.display();


    polygon.display();

    
    slingshot.display();    
}

function mouseDragged(){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    
}

function mouseReleased() {
    slingshot.fly();
}
