const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

function doStep1(callback) {
 const animation = alice1.animate(aliceTumbling, aliceTiming);
 callback();
}

function doStep2(callback) {
  const animation = alice2.animate(aliceTumbling, aliceTiming);
  callback();
}

function doStep3(callback) {
  const animation = alice3.animate(aliceTumbling, aliceTiming);
  callback();
}

function doOperation() {
  doStep1((result1) => {
    doStep2((result2) => {
      doStep3((result3) => {
        console.log("Hi");
      })
    })
  });
}

// callback hell version
// const animation1 = 
// alice1.animate(aliceTumbling, aliceTiming).finished.then((response) => {
//   alice2.animate(aliceTumbling, aliceTiming).finished.then((response) => {
//     alice3.animate(aliceTumbling, aliceTiming);});
// });

// chaining version

// let animation = alice1.animate(aliceTumbling, aliceTiming).finished
//   .then(() => {
//     return alice2.animate(aliceTumbling, aliceTiming).finished })
//     .then(() => alice3.animate(aliceTumbling, aliceTiming));

// await/async version


async function dot() {
try {
  let animation1 = alice1.animate(aliceTumbling, aliceTiming).finished;
  await animation1;
  let animation2 = alice2.animate(aliceTumbling, aliceTiming).finished;
  await animation2;
  let animation3 = alice3.animate(aliceTumbling, aliceTiming).finished;
  await animation3;

}
catch (err) {
  console.error(`${err}`);
}
}
dot()