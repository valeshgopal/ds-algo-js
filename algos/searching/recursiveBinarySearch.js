const array = [-6, -2, 3, 5, 8, 11, 20]

function recursiveBinarySearch(lo, hi, arr, target) {
    if (lo > hi) return -1
    const mid = Math.floor((lo + hi) / 2)
    if (arr[mid] === target) {
        return mid
    }

    if (arr[mid] > target) {
        hi = mid - 1
        return recursiveBinarySearch(lo, hi, arr, target)
    }

    if (arr[mid] < target) {
        lo = mid + 1
        return recursiveBinarySearch(lo, hi, arr, target)
    }
}

console.log(recursiveBinarySearch(0, 6, array, -6))
console.log(recursiveBinarySearch(0, 6, array, -2))
console.log(recursiveBinarySearch(0, 6, array, 3))
console.log(recursiveBinarySearch(0, 6, array, 5))