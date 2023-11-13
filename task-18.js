function numberDegree(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * numberDegree(x, n - 1);
    }
}

console.log( numberDegree(5, 5) );