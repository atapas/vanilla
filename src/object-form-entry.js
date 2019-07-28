const fruits = {
    'apple': 2,
    'grape': 3,
    'mango': 10
};

const fruitArray = Object.entries(fruits);
console.log(fruitArray);

const cars = [
    ['Maruti', 34],
    ['Hunday', 44],
    ['Honda', 3]
];

const carObj = Object.fromEntries(cars);
console.log(carObj);