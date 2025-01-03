"use strict";

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

main();
