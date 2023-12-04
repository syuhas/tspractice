//                    Type Assertions in Typescript                //

//Type assertions are a way to tell the compiler "hey, I know what I'm doing, trust me"

//for example, we can do this:



    // let message = 'abc'; 

    //now, if we do this:

    // let endsWithC = message.endsWith('c');  //instellisense will show methods


//we will be able to use intellisense to see the methods that are available to us


//however, if we do this:

    // let message;

    // message = 'abc';

//intellisense is not available to us, because the compiler does not know what type message is

//to get around this we can use type assertions. Using the same code above, we can add a ': String' to the end of the variable declaration

    // let message: string;

    // message = 'abc';

    // let endsWithC = message.... //intellisense will show methods that are available

//now, we can use intellisense in the above code because we are asserting that the variable 'message' is of type string



//Another way of doing this is to assert the type within the endsWithC variable declaration

let message;

message = 'abc';

let endsWithC2 = (<string>message).endsWith('c');
//or the less common way
let endsWithC3 = (message as string).endsWith('c');

console.log(endsWithC2);

console.log(endsWithC3);

//both of these will tell the compiler that message is of type string, and will not throw an error




