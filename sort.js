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

function merge(array, left, middle, right) {
    let leftSide = middle - left + 1;
    let rightSide = right - middle;

    let leftArray = new Array(leftSide);
    let rightArray = new Array(rightSide);

    for (let i = 0; i < leftSide; i++) {
        leftArray[i] = array[left + i];
    }

    for (let i = 0; i < rightSide; i++) {
        rightArray[i] = array[middle + 1 + i];
    }

    let i = 0;
    let j = 0;
    let k = left;
        
    while (i < leftSide && j < rightSide) {
        if (leftArray[i] < rightArray[j]) {
            array[k] = leftArray[i];
            i++;
        } else {
            array[k] = rightArray[j];
            j++;
        }
        k++;
    }

    while (i < leftSide) {
        array[k] = leftArray[i];
        i++;
        k++;
    }

    while (j < rightSide) {
        array[k] = rightArray[j];
        j++;
        k++;
    }
}

function mergeSort(array, left, right) {
    if (left >= right) {
        return;
    }

    let middle = left + parseInt((right - left) / 2);

    mergeSort(array, left, middle);
    mergeSort(array, middle + 1, right);

    merge(array, left, middle, right);
}

function partition(array, left, right) {
    let pivot = array[left];

    let i = left + 1;
    let j = right;

    while (i <= j) {
        while (array[i] <= pivot) {
            i++;
        }

        while (array[j] > pivot) {
            j--;
        }

        if (i < j) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    let temp = array[left];
    array[left] = array[j];
    array[j] = temp;

    return j;
}

function quickSort(array, start, end) {
    if (start >= end) {
        return;
    }

    let pivot = partition(array, start, end);

    quickSort(array, start, pivot - 1);
    quickSort(array, pivot + 1, end);
}