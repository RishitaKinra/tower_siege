class SlingShot{
    constructor(bodyA,pointB){
        var sling_options = {
            'bodyA':bodyA,
            'pointB':pointB,
            'stiffness':0.04,
            'length':10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(sling_options);
        World.add(world,this.sling);
    }

    attach(body){
        this.sling.bodyA = bodyA
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        line(pointB.x, pointB.y, pointA.x, pointA.y);
    }
}