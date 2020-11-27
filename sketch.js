const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//const mouseconstraints = Matter.mouseconstraint;


function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

  //  let canvasmouse = Mouse.create(canvas,elt);
   // canvas,ouse.pixelRatio = pixelDensity();
   // let options = {
//mouse:canvasmouse
  //  }
   // mConstraint = MouseConstraint.create(engine,options);
  //  World.add(world,mConstraint);

pendulum1 = new Pendulum(300,400,"red");
sling1 = new Slingshot(pendulum1.body,{x:500,y:100});
    
pendulum2 = new Pendulum(358,400,"red");
sling2 = new Slingshot(pendulum2.body,{x:558,y:100});
     
pendulum3 = new Pendulum(416,400,"red");
sling3 = new Slingshot(pendulum3.body,{x:616,y:100});
    
pendulum4 = new Pendulum(474,400,"red");
sling4 = new Slingshot(pendulum4.body,{x:674,y:100});
    
pendulum5 = new Pendulum(532,400,"red");
sling5 = new Slingshot(pendulum5.body,{x:732,y:100});
}

function draw(){
   
        background(0);
    
    Engine.update(engine);
   
    sling1.display();
    pendulum1.display();
    sling2.display();
    pendulum2.display();
    sling3.display();
    pendulum3.display();
    sling4.display();
    pendulum4.display();
    sling5.display();
    pendulum5.display();
}

function mouseDragged(){

    Matter.Body.setPosition(pendulum5.body,{x:mouseX,y:mouseY});
}