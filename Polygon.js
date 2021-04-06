class Polygon
{
    constructor (x,y,r)
    {
        var Features={
            isStatic:false,
            restitution:0.5
            }
            this.Polygon=Bodies.circle( x,y,r,Features)
            World.add(myWorld,this.Polygon)
            this.r = r  
    }
    display()
    {
        push ()
        translate (this.Polygon.position.x,this.Polygon.position.y)
        rotate (this.Polygon.angle)
                    imageMode(CENTER)  
 image(PolygonImage,0,0,50,50);
    pop ()
    }
}