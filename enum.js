var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {                            //this is the js version of the ts enum file after compilation
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";          // this is 'enum' in javascript'
})(Color || (Color = {}));                    // this is a far more complex way of doing the same thing as the ts version
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
