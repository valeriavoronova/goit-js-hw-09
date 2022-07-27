import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  delay: document.getElementsByName('delay'),
  step: document.getElementsByName('step'),
  amount: document.getElementsByName('amount'),
  btn: document.querySelector('button'),

}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }
};



createPromise(2, 1500)
  // .then(({ position, delay }) => {
  //   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  // })
  // .catch(({ position, delay }) => {
  //   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  // });


// function createPromise(position, delay) {
//   const step = Number(refs.step.value);
  
//     return new Promise((resolve) => {
//       const shouldResolve = Math.random() > 0.3;
//       for (let i = 0; i < Number(refs.amount.value); i += 1){
//         position += 1;
//       }
//       setTimeout(() => {
//         setInterval(() => {
//           if (shouldResolve)
//             resolve(console.log(`✅ Fulfilled promise ${position} in ${delay}ms`));
//           else
//             console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//         }, step)
//       }, delay)
    
//     })
  
  refs.btn.addEventListener('click', createPromise);
//  refs.btnStart.addEventListener('click', timer.start);

   // 




// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     
//   } else {
//    
//   }
// }

// createPromise(2, 1500);

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
