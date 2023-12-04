//                  Constructors in TypeScript                 //

//constructors are methods that are called when we create an instance of a class


//take the same code from the previous classes example
class PointStuff {
    x: number;          
    y: number;          

    //this is an example of a constructor method
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    draw() {                             
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }

}

let point = new PointStuff(1, 2); //the new instance requires the two parameters that we initialize with the constructor method

//...and we can do away with the following code:
// point.x = 1; 
// point.y = 2;
//since these two points are called from the constructor method

point.draw();

//we can also make the two parameters for the constructor optional by adding a question mark after the parameter name

class PointStuff2 {
    a: number | undefined;          
    b: number | undefined;          

    
    constructor(a?: number, b?: number) {
        this.a = a;
        this.b = b;
    }

    draw() {                             
        console.log('X: ' + this.a + ', Y: ' + this.b)
    }

}

let point2 = new PointStuff2(); //this will not throw a compiler error because the parameters are optional


