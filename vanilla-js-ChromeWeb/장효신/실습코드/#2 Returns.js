const age = 96;

function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

const calculator = {
    name: "myFirstCalculator",
    add: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    divide: function(a,b){
        if (b!==0){
            return a/b;}
    },
    power: function(a,b){
        return a**b;
    }
}

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult,3);
const divideResult = calculator.divide(minusResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);