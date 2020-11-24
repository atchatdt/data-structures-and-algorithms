console.time('t')
function fibonacci_bottom_up(num, arr) {
    if (num == 1 || num == 2) return 1
    arr[1] = 1
    arr[2] = 1

    for (let i = 3; i <= num; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[num]
}

function F(n) {
    let arr = new Array(n+1)
    arr.fill(0)
    return fibonacci_bottom_up(n,arr)
}

console.log(F(1000))
console.timeEnd('t')