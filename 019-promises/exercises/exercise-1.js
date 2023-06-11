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

console.log('Program Started'); // 1
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Program complete'); // 4
  }, 3000);

  setTimeout(() => {
    reject('Promise Failure');
  }, 2000);
});

console.log(myPromise); // 2
console.log('Program in progress...'); // 3

myPromise
  .then((resolve) => {
    console.log(resolve); // 4
  })
  .catch((reject) => {
    console.log(reject);
  });
