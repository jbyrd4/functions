// Pre-Practice
const calculateAgeInDogYears = (ageOfPerson) => {
  const ageInDogYears = ageOfPerson / 7;
  return ageInDogYears;
};

const dogAge = calculateAgeInDogYears(34);

// Practice 1 - Best in Show
const favoriteBreeds = (dogBreed) => {
  if (dogBreed === `meow`) {
    const favorite = `I like cats`;
    return favorite;
  } else {
    const favorite = `My favorite dog breed is ${dogBreed}.`;
    return favorite;
  }
};

const breedCat = favoriteBreeds(`meow`);
const breedDog = favoriteBreeds(`corgi`);

console.log(`${breedCat} | ${breedDog}`);


// Practice 2 - Addition
const add = (num1, num2, num3) => {
  const numSum = num1 + num2 + num3;
  return numSum;
};

const solution = add(17, 111, 10);
console.log(solution);


// Practice 3 - Self-Driving Cars
const go = (direction, speed) => {
    console.log(`The car is moving ${direction} at ${speed} MPH.`)
    if (speed > 75) {
        console.log(`SLOW DOWN!`)
    }
}

go('forward', 74)
go('in circles', 76)


// Practice 4 - Evens or Odds
const numArr = [0,1,1,2,3,5,8,13,21,34,55]

const evenOrOdd = (nums) => {
  for (num of nums) {
      if (num % 2 === 0) {
        console.log(`Even`)
    } else {
        console.log(`Odd`)
    }
  }
}

evenOrOdd(numArr)


// Practice 5 - Double Functions
