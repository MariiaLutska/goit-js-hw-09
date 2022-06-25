import Notiflix from 'notiflix';


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onFormClick);

function onFormClick(event) {
  event.preventDefault();
  let delayV = Number(event.target.delay.value);
  let amountV = Number(event.target.amount.value);
  let stepV = Number(event.target.step.value);
  if (delayV < 0 || amountV < 0) {
    return Notiflix.Notify.info('Please enter positive number');
  }
  const dataPromise = [];
  for (let positionV = 1; positionV <= amountV; positionV += 1){
    dataPromise.push({ position: positionV, delay: delayV });
    delayV += stepV;
  }

  dataPromise.forEach(item => {
    createPromise(item.position, item.delay)
      .then(() => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${item.position} in ${item.delay}ms`, {
          useIcon: false,
          timeout: 5000,
        });
      })
      .catch(() => {
        Notiflix.Notify.failure(`❌ Rejected promise ${item.position} in ${item.delay}ms`, {
          useIcon: false,
          timeout: 5000,
        });
      });
  });
}



