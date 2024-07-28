const array = [-6, 20, 11, 5, 8, 3, -2]

function mergeSort(arr) {
    if (arr.length < 2) return arr

    const mid = Math.floor(arr.length / 2)

    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr]
}

console.log(mergeSort(array))