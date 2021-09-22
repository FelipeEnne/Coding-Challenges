function processData(input) {
    //Enter your code here
    let x = []
    x.push(input)
    console.log(x)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
