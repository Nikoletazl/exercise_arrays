function solve(arr, step) {
    return arr.filter((element, index) => index % step == 0)
}
