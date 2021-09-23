function processData(input) {
    //Enter your code here
    let queue = []
    input = input.match(/.+\b/g);
    queue.push(input)
    console.log(queue)
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
