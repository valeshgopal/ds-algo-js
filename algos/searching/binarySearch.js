const array = [-6, -2, 3, 5, 8, 11, 20]

function binarySearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        const midPoint = Math.floor((leftIndex + rightIndex) / 2)

        if (arr[midPoint] === target) {
            return midPoint
        }

        if (arr[midPoint] > target) {
            rightIndex = midPoint - 1
        }

        if (arr[midPoint] < target) {
            leftIndex = midPoint + 1
        }
    }

    return -1
}


console.log(binarySearch(array, 99))
console.log(binarySearch(array, 8))
console.log(binarySearch(array, 11))
console.log(binarySearch(array, 20))