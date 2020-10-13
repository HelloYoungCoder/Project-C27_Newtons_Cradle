class Rope{
    constructor(body1, body2, offsetX, offsetY){
        
        this.offsetX = offsetX;
        this.offsetY = offsetY;
                
        //Assign properties 
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX, y:this.offsetY}
        }

        //Create chain between body A & B
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    //Create chain between body A & B
    display(){

        //Roof & Bob Position
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        //Anchor_1
        var x1_a = pointA.x;
        var y1_a = pointA.y;

        //Anchor_2
        var x2_b = pointB.x + this.offsetX;
        var y2_b = pointB.y + this.offsetY;

        strokeWeight(1.5);
        stroke("black");
        line(x1_a, y1_a, x2_b, y2_b);
    }
    
}
