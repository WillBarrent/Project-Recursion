function mergeSort(arr) {
    const l = 0, h = arr.length - 1;
    if (l < h) {
        let arr1 = mergeSort(arr.slice(l, Math.round((l + h) / 2)));
        let arr2 = mergeSort(arr.slice(Math.round((l + h) / 2), h + 1));
        return merge(arr1, arr2);
    }

    return arr;
}

function merge(arr1, arr2, i = 0, j = 0) {
    if (i !== arr1.length && j !== arr2.length) {
        return (arr1[i] > arr2[j]) ? [arr2[j], ...merge(arr1, arr2, i, ++j)] : [arr1[i], ...merge(arr1, arr2, ++i, j)];
    }

    return (i === arr1.length) ? arr2.slice(j) : arr1.slice(i);
}

const test1 = [3, 2, 1, 13, 8, 5, 0, 1];
const test2 = [105, 79, 100, 110];

console.log(mergeSort(test1));
console.log(mergeSort(test2));