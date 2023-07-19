/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 5 seconds with the
       value {data: "Hello, friend!", error: null}
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Create a first Promise chain using the promise above and
       Print out the resolved value when the first promise fulfills
    6. Have this first promise return another new Promise that will
       fulfill after 2 seconds with the message:
       "First promise chain complete!"
    7. Print out the message from the above promise after it
       fulfills ("First promise chain complete!")

    8. Create a second Promise chain using the first promise above and
       Print out the resolved value when the second promise fulfills
    9. Have this second promise return another new Promise that will
       fulfill after 10 seconds with the message:
       "Second promise chain complete!"
   10. Print out the message from the above promise after it
       fulfills ("Second promise chain complete!")

    HINT: Use setTimeout for the delay
    HINT2: This will be using the same promise two times:
           const myPromise = new Promise(...) // step 2
           myPromise.then(...).then(...) // steps 5-7
           myPromise.then(...).then(...) // steps 8-10

    BONUS: WHY does it work this way?
*/
// console.log('Program started');
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ data: 'Hello, friend!', error: null });
//   }, 5000);
// });

// // The timer function below shows the creation of a Promise object and how resolve(value) and reject(error) are used.
// function timer(time) {
//   /* When a promise is created, the 'executor' function is run automatically. It accepts 'resolve' and 'reject' functions as  parameters. A promise is said to be settled when it’s either fulfilled (resolve() is called) or rejected (reject() is called).*/
//   return new Promise((resolve, reject) => {
//     if (isNaN(time)) reject(error, 'Enter a number'); // If number is not passed in, invoke reject.
//     let secs = time * 1000;
//     setTimeout(function () {
//       resolve(time); // Invoke resolve when time has elapsed. Pass in time variable.
//     }, secs);
//   });
// }

// timer('hi').then((val) => console.log('done', val)); // Display the value in the console after 5 seconds.Output

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('I was first promise declared');
//   }, 2000);
// });

// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('I was second promise declared');
//   }, 1100);
// });

// const collectedPromises = [myPromise, myPromise2];

// Promise.any(collectedPromises).then((val) => console.log(val));

// fetch('https://swapi.dev/api/');

// async function getTodo(id) {
//   try {
//     let url = 'https://jsonplaceholder.typicode.com/todos/' + id;
//     let resp = await fetch(url); // await the promise to resolve
//     let results = await resp.json(); // await the promise to resolve
//     console.log(results);
//   } catch (err) {
//     // catch error if it occurs
//     console.error('Problem fetching data', err);
//   }
// }
// getTodo(5);

// async function getData() {
//   try {
//     let resp1 = await fetch('https://swapi.dev/api/'); // await initial fetch request
//     let urls = await resp1.json(); // await json() method
//     let resp2 = await fetch(urls.people); // await second fetch request
//     let results = await resp2.json(); // await json() method
//     console.log(results);
//   } catch (e) {
//     console.log(e);
//   }
// }
// getData();

let diff = Math.floor(Date.now() / 1000);
console.log('Started at 0 seconds');
setTimeout(() => {
  let t = Math.floor(Date.now() * 1000) - diff;
  console.log(`processed at ${t} seconds`);
}, 1000); // X number of setTimeout calls are inserted here...
setTimeout(() => {
  let t = Math.floor(Date.now() / 1000) - diff;
  console.log(`processed at ${t} seconds`);
}, 1000);
