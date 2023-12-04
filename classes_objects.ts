//                   Classes                    ///


//in many programming languages, we have a concept called cohesion

//cohesion is the idea that things that are related should be part of one unit

//in the previous interfaces file, we had a bunch of functions and and interface
//that were all highly related to each other

//we can use classes to group all of these things together

class PointStuff {
    x: number;  //these are fields          
    y: number;  //these are fields          

    draw() {    //this is a method                          
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }

    getDistance(anotherpoint: PointStuff) {  //this is a method         
        // ...
    }
}


//now let's declare a variable of this type

let point = new PointStuff();  // create a new instance of PointStuff

point.x = 1; // access the fields of this instance
point.y = 2; // access the fields of this instance

point.draw(); // call the draw method on this instance



