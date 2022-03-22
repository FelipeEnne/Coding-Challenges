function processData(input) {
    
  const objectsInput = input.split('\n').reduce((previousValue, currentValue) => {
      if(currentValue.length == 1) {
          previousValue.push(parseInt(currentValue))
      } else {
          previousValue.push(currentValue.split(' ').map(s => parseInt(s)))
      }
      console.log({previousValue, currentValue})
      return previousValue;
  }, [])
  console.log(objectsInput)
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
