//                      Enum in typescript                 //


//Enums are used to define a set of named constants, similar to the way we use #define in C/C++
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

//instead of this ^,    we can do this:

enum Color { Red, Green, Blue};

//now we can actually use intellisense to see the values of the enum, and we can also use the enum as a type

let backgroundColor = Color.Red;

//In the above enum, each value is assigned a number, starting with 0 and incrementally increasing by 1
//so the above enum is essentially the same as this:

enum Color2 { Red=0, Green=1, Blue=2 };

//we can prove this like so:

let backgroundColor2 = Color.Red; //this will return 0              // This will be able to access intellisense, which is a great feature of TypeScript
let backgroundColor3 = Color2.Red; //this will also return 0

//we can also assign the numbers manually, like so:

enum Color3 { Red=0, Green=2, Blue=4 };

//now, the values will be assigned like so:

let backgroundColor4 = Color3.Red; //this will return 0
let backgroundColor5 = Color3.Green; //this will return 2

//BEST PRACTICE: explicitly assign the values of the enum, so that if we add a new value to the enum, we do not have to go back and change the values of the other enum values



