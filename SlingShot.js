class SlingShot
{
    constructor(bodyA, pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.SlingShot = Constraint.create(options);
        World.add(world, this.SlingShot);

        this.pointB=pointB;
    }
    fly()
    {
      this.SlingShot.bodyA=null;
    }


    display()
    {
        if(this.launcher.bodyA)
        {
        var pointA = this.launcher.bodyA.position;
        var pointB =  this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}