var error_msg = 'The program is throwing an error here';
var log = function (error_msg) {
    console.log(error_msg);
};
var doLog = function (error_msg) {
    console.log(error_msg);
};
var doLog2 = function (error_msg) { console.log(error_msg); };
var doLog3 = function (error_msg) { return console.log(error_msg); };
log(error_msg);
doLog(error_msg);
doLog2(error_msg);
doLog3(error_msg);
