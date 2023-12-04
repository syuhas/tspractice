//                    Type Annotations in Typescript                //

let x;       

//this will imply type of ANY 


//instead of this:
let count = 5;
// which the type is implied as a number



//Instead we can do this:
let a: Number; //number
let b: String; //string
let c: Boolean; //boolean
let d: any; //any
let e: Number[]; //array of numbers
let f: Number[] = [1, 2, 3]; //array of numbers initialized to 1, 2, 3
//Here, we are explicitly stating the type of the variable if we do not know it's 
//value ahead of time and do not want to initialize it to a value, or optionally we can
//initalize it to a value along with the implied type
let g: any[] = [1, true, 'a', false]; 
//We can also use an 'any' array to store multiple types of values in the same array, without implying types for each value
//But we are still implying that the array can be of any type, so we can still add values of any type to it
