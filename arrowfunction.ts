//                    Arrow Functions in Typescript                //

//Arrow functions are a way to simplify the syntax of a function



let error_msg = 'The program is throwing an error here';

//for example, we can do this:


let log = function(error_msg: string) {
    console.log(error_msg);
}

//or we can do this:

let doLog = (error_msg) => {
    console.log(error_msg);
}

//or we can do this:

let doLog2 = (error_msg) => {console.log(error_msg)}; //to move everything to one line

//or

let doLog3 = (error_msg) => console.log(error_msg);  // to move everything to one line AND remove the curly braces

//or even this:

let doLog4 = error_msg => console.log(error_msg); //however, this is a less clean way to write this and it can make it less readable by removing the () around 'error_msg'


log(error_msg);

doLog(error_msg);

doLog2(error_msg);

doLog3(error_msg);

// so the final simplified form for an empty arrow function with one line

let doLogger = () => console.log()

