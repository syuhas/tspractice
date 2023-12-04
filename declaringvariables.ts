//              Declaring variables in TypeScript           //


// Declaring variables in TypeScript
// TypeScript is a statically typed language, which means that variables can be declared to have a specific type.

// In TypeScript, we can declare a variable in the following ways.


function doSomething() {
    for (var i = 0; i < 5; i++) { //<-- if you put 'var' here it will be scoped to the nearest function
        console.log(i)
    }

    console.log('Finally: ' + i);
}


function doSomethingWithLet() {
    for (let i = 0; i < 5; i++) { //<-- if you put 'let' here it will be scoped only to this for block
        console.log(i)
    }

    console.log('Finally: ' + i); //<-- this will throw an error because i is not defined
}

doSomething();

doSomethingWithLet();


// the takeaway: always use 'let' when declaring variables in TypeScript. You will get a lot of good intellisense and error checking from the compiler.