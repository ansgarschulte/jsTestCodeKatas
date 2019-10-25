function sumOfNumbers(numbers) {
    return numbers.reduce((acc, val) => {
        return acc + val
    }, 0);
}

export default (str) => {
    if (!str) {
        return 0;
    } else if (!isNaN(str)) {
        return Number(str);
    }
    return sumOfNumbers(str
        .split(',')
        .map(Number));


};
