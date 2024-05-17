function bubbleSort(array) {
    sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                sorted = false;
            }
        }
    }
}

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let argMin = i;
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[argMin]) {
                argMin = j;
            }
        }

        temp = array[i];
        array[i] = array[argMin];
        array[argMin] = temp;
        console.log(array);
    }
}

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i;

        while (j > 0) {
            if (array[j] < array[j - 1]) {
                temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            } else {
                break;
            }

            j--;
        }
    }
}

function merge(arr, left, middle, right) {
    let leftSide = middle - left + 1;
    let rightSide = right - middle;

    let leftArray = new Array(leftSide);
    let rightArray = new Array(rightSide);
    
    for (let i = 0; i < leftSide; i++) {
        leftArray[i] = arr[left + i];
    }

    for (let i = 0; i < rightSide; i++) {
        rightArray[i] = arr[middle + 1 + i];
    }

    let i = 0;
    let j = 0;
    let k = left;
        
    while (i < leftSide && j < rightSide) {
        if (leftArray[i] < rightArray[j]) {
            arr[k] = leftArray[i];
            ++i;
        } else {
            arr[k] = rightArray[j];
            j++;
        }
        k++;
    }

    while (i < leftSide) {
        arr[k] = leftArray[i];
        i++;
        k++;
    }

    while (j < rightSide) {
        arr[k] = rightArray[j];
        j++;
        k++;
    }
}

function mergeSort(arr, left, right) {
    if (left >= right) {
        return;
    }

    let middle = left + parseInt((right - left) / 2);

    mergeSort(arr, left, middle);
    mergeSort(arr, middle + 1, right);

    merge(arr, left, middle, right);
}

function quickSort(array) {
    if (array.length < 2) {
        return array;
    }

    let pivot = array[0];
    let leftArray = [];
    let rightArray = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            leftArray.push(array[i]);
        } else {
            rightArray.push(array[i]);
        }
    }

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}