"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readline() {
  return inputString[currentLine++];
}

const printLine = (x) => {
  console.log(x);
};

const print = (x) => {
  process.stdout.write(x);
};

const main = () => {
  const lines = +readline().trim();
  let a = 0,
    b = 0,
    c = 0;

  for (let i = 0; i < lines; i++) {
    const values = readline().trim().split(" ");
    a += +values[0];
    b += +values[1];
    c += +values[2];
  }

  if (a === 0 && b === 0 && c === 0) print("YES");
  else return print("NO");
};
