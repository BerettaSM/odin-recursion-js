function merge(left, right) {
    let i = 0, j = 0;
    const merged = [];
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            merged.push(left[i++]);
        }
        else {
            merged.push(right[j++]);
        }
    }
    merged.push(...left.slice(i));
    merged.push(...right.slice(j));
    return merged;
}

function mergeSort(arr) {
    if(arr.length < 2) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

module.exports = { mergeSort };
