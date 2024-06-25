function fibs(n) {
    let fib0 = 0, fib1 = 1, fib = 0;
    let arr = [fib0, fib1];

    for (let i = 1; i < n - 1; i++) {
        fib = fib0 + fib1;
        fib0 = fib1;
        fib1 = fib;

        arr = [...arr, fib]
    }

    return arr;
}

console.log(fibs(8));

