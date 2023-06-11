/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
       and rejects after 2 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Program complete" if the promise fulfills
    6. Print out "Program failure" if the promise rejects

    HINT: Use setTimeout for the delay
*/

console.log('Program started'); // 1

const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Program Complete');
  }, 3000);
});

console.log(prom); // 2
console.log('Program in progress');
