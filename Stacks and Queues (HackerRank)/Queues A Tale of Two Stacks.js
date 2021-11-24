function processData(input) {
    //Enter your code here
    let queue = []
    input = input.match(/.+\b/g);
    
    for(let i=1; i<input.length; i++) {  
        let re = /(\d+)\s(\d+)\b/.exec(input[i]);
        if (re) {
            queue.push(re[2]);
        } else if (input[i] == 2) {
            queue.shift();
        } else {
            console.log(queue[0]);
        }
    }
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
