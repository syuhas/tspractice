
//             Interfaces in TypeScript               //


let drawPoint = (x, y) => {
    // ...
}

//sometimes you can end up with a function with a lot of parameters and you should avoid this at all costs

let drawPoint2 = (a, b, c, d, e, f, g, h, i, j, k) => {
    // ...
}

//instead, you can use a single concept that all of these parameters can belong to

//for example think of a car with a lot of parts, you have all the parts into one object, 'car'

let drawPoint3 = (point) => {
    console.log(point)
}

//now we can send in an enum object as the 
drawPoint3({
    x: 1, 
    y: 2
});

//however there is a problem with this implementation

//if we pass in a string

    // drawPoint3({
    //     x: 'Steve'
    // });

//the compiler will not throw an error but we know this will break because the code is expecting an x and y point

//one fix for this is to implement an INLINE ANNOTATION

    // let drawPoint4 = (point: { x: number, y: number} ) => {
        // ...
    // }

// so now

    // drawPoint4({
    //     x: 'Steve',           //this will throw a compiler error
    //     y: 2
    // })


//                 THE BETTER APPROACH IS TO USE INTERFACES!                      //


interface Point {
    x: number,
    y: number
}

let drawPoint5 = (point: Point) => {
    // ......do something with the point interface
}

drawPoint5({
    x: 1,
    y: 2
})

//we are essentially using the interface to validate that the object that we are sending into the function contains the correct types








