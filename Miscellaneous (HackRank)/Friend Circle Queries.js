"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function copyFirends(people, person1, person2) {
  let firendshipWithMorePeople, friendshipWithLessPeople;
  if (people[person1].length > people[person2].length) {
    firendshipWithMorePeople = people[person1];
    friendshipWithLessPeople = people[person2];
  } else {
    firendshipWithMorePeople = people[person2];
    friendshipWithLessPeople = people[person1];
  }

  Array.prototype.push.apply(
    firendshipWithMorePeople,
    friendshipWithLessPeople
  );
  for (let i = 0; i < friendshipWithLessPeople.length; i += 1) {
    people[friendshipWithLessPeople[i]] = firendshipWithMorePeople;
  }
}

// Complete the maxCircle function below.
function maxCircle(queries) {
  var people = {},
    currentNumberOfPeopleMadeFriends = [],
    maxNumberOfPeopleInAGroup = 0;

  for (var i = 0; i < queries.length; i += 1) {
    let person1 = queries[i][0];
    let person2 = queries[i][1];
    if (people[person1]) {
      if (people[person2]) {
        if (people[person2] !== people[person1]) {
          copyFirends(people, person1, person2);
        }
      } else {
        people[person2] = people[person1];
        people[person2].push(person2);
      }
    }
    return currentNumberOfPeopleMadeFriends;
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  let queries = Array(q);

  for (let i = 0; i < q; i++) {
    queries[i] = readLine()
      .split(" ")
      .map((queriesTemp) => parseInt(queriesTemp, 10));
  }

  const ans = maxCircle(queries);

  ws.write(ans.join("\n") + "\n");

  ws.end();
}
