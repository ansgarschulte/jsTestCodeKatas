function sumOfNumbers(numbers) {
    if(numbers.includes(-1)){
        throw new Error('negative not allowed');
    }
    return numbers.reduce((acc, val) => {
        return acc + val
    }, 0);
}

export default (str) => {
    if (!str) {
        return 0;
    } else if (!isNaN(str)) {
        const number = Number(str);
        if(number < 0){
            throw new Error('negative not allowed');
        }
        return number;
    }
    return sumOfNumbers(str
        .split(',')
        .map(Number));


};
