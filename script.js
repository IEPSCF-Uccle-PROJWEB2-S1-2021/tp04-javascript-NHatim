const min = (a, b) => {
  return a > b || a === b ? b : a;
}

const max = (a, b) => {
  return a > b || a === b ? a : b;
}

const reduce = (numbers, fn) => {
  let resultat = numbers[2];
  let ancienResultat;

  if (numbers.length <= 1) {
    return null
  }
  if (numbers.length === 2) {
    resultat = fn(numbers[0], numbers[1]);
  }

  for (let i = 2; i < numbers.length; i++) {
    ancienResultat = fn(resultat, numbers[i]);
    resultat = ancienResultat;
  }
  return resultat;
}

const filter = (numbers, fn) => {
  let trueNumber = [];
  for (let i = 0; i < numbers.length; i++) {
    if (fn(numbers[i])) {
      trueNumber.push(numbers[i]);
    }
  }
  return trueNumber;
}


const myTestNumbers = [5, 8, 13, 21, 34, 610, 55, 3, 89, 144, 233, 377];
console.log(reduce(myTestNumbers, min));
console.log(reduce(myTestNumbers, max));
console.log(filter(myTestNumbers, (num) => {
  if (num >= 30) {
    return true
  } else {
    return false;
  }
}))
