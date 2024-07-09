function fibs(n) {
    const result = [0, 1];

    for (let i = 2; i < n; i++) {
        result.push(result.at(-2) + result.at(-1));
    }

    return result.slice(0, n);
}

function fibsRec(n) {
    if(n < 1) return [];
    if(n === 1) return [0];
    if(n === 2) return [0, 1];
    const arr = fibsRec(n - 1);
    arr.push(arr.at(-2) + arr.at(-1));
    return arr;
}

module.exports = { fibs, fibsRec };
