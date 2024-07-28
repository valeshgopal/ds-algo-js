const array = [-6, 20, 11, 5, 8, 3, -2]

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > temp) {
                arr[j + 1] = arr[j]
            } else {
                arr[j + 1] = temp
                break
            }
        }
    }
    return arr
}

console.log(insertionSort(array))