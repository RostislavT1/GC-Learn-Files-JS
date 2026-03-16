export const getAdults = obj => {
    if (Object.keys(obj).length === 0) return null;
    const adultsObject = {};
    for (let key in obj) {
        if (obj[key] >= 18) adultsObject[key] = obj[key];
    }
    return adultsObject;
};

// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
