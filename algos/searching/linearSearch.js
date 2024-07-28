const array = [-6, 2, 7, -1, 20, 5]

//find index of the target value in an array
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1
}

console.log(linearSearch(array, -6))
console.log(linearSearch(array, -1))
console.log(linearSearch(array, 20))
console.log(linearSearch(array, 5))
console.log(linearSearch(array, 32))