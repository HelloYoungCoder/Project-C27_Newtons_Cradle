class Chain{
    constructor(bodyA, bodyB){
        
        //Assign properties 
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }

        //Create chain between body A & B
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    //Create chain between body A & B
    display(){
        //Create x & y axis of Body A - Bird
        var x1 = this.chain.bodyA.position.x;
        var y1 = this.chain.bodyA.position.y;

        //Create x & y axis of Body B - Constrained Log
        var x2 = this.chain.bodyB.position.x;
        var y2 = this.chain.bodyB.position.y;

        //Create line between body A & B
        strokeWeight(4);
        stroke("black");
        line(x1,y1,x2,y2);
    }
    
}
