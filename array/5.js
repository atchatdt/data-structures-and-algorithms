function mergeSortedArrays(arr1, arr2) {

    if (arr1.length == 0) {
        return arr2
    }
    if (arr2.length == 0) {
        return arr1
    }
    let mergeArr = []
    let item1 = arr1[0]
    let item2 = arr2[0]
    let i = 1
    let j = 1

    while (item1 || item2) {
        if (item1 < item2 || item2 == undefined) {
            mergeArr.push(item1)
            item1 = arr1[i]
            i++
        } else {
            mergeArr.push(item2)
            item2 = arr2[j]
            j++
        }
    }

    return mergeArr
}

console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]))