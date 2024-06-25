function fibsRec(n) {
    if (n < 3) {
        return [0, 1];
    } else {
        let arr = fibsRec(n-1);
        arr = [...arr, arr[n-2] + arr[n-3]];
        return arr;
    }
}

console.log(fibsRec(12));