function hw(Hello) {
    console.log(Hello);
}
var greeting = "Hello World";
hw(greeting);
var x;
var count = 5;
var a;
var b;
var c;
var d;
var e;
var f = [1, 2, 3];
var g = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 0] = "Red";
    Color2[Color2["Green"] = 1] = "Green";
    Color2[Color2["Blue"] = 2] = "Blue";
})(Color2 || (Color2 = {}));
;
var backgroundColor2 = Color.Red;
var backgroundColor3 = Color2.Red;
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 0] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
;
var backgroundColor4 = Color3.Red;
var backgroundColor5 = Color3.Green;
var message;
message = 'abc';
var endsWithC = message.endsWith('c');
var endsWithC2 = message.endsWith('c');
var endsWithC3 = message.endsWith('c');
