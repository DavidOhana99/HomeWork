'use strict'

const getDays = (function () {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday'];

    function getDay(index) {
        return days[index - 1];
    }



    return {
        getDay,
        getdayIndex(day) {

            const index = days.findIndex(d => d === day);
            return index + 1;
        }
    };
}());


console.log(getDays.getDay(2));
console.log(getDays.getdayIndex('monday'));


//////////////////////////////////////////////////////


const intrestCalculator = (function () {
    let rate = 0;
    let years = 0;
    // let principle = 0;

    function SetRate(amt) {
        rate = amt;
    }
    function SetYears(yr) {
        years = yr;
    }

    // function Principle(pcpl) {
    //     principle = pcpl;
    // }
    return {
        // SetRate(amt) {
        //     rate = amt;
        // },
        // SetYears(yr) {
        //     years = yr;
        // },
        SetRate,
        SetYears,
        calculateIntrest(principle) {
            return principle * rate * years;
        }
    }
}());

intrestCalculator.SetRate(0.05);
intrestCalculator.SetYears(30);
console.log(intrestCalculator.calculateIntrest(600000));