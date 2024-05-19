const BARS_CONTAINER_DIV = ".bars-container";

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function range(start, end) {
    let array = [];

    for (let i = start; i < end; i++) {
        array.push(i);
    }

    return array;
}

function drawRectangles() {
    let array = range(1, 51);
    let barsContainer = document.querySelector(BARS_CONTAINER_DIV);
    barsContainer.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        let rectangleDiv = document.createElement("div");
        rectangleDiv.classList.add("vertical-bar");
        rectangleDiv.style.height = `${2 * array[i]}%`;
        rectangleDiv.innerHTML = `<span>${i + 1}</span>`;
        barsContainer.appendChild(rectangleDiv);
    }
}

function shuffleArray() {
    // Fisher-Yates Shuffle
    let array = document.querySelector(BARS_CONTAINER_DIV).children;

    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        let elem1 = array[i];
        let elem2 = array[j];
        let temp = document.createElement("div");

        elem1.parentNode.insertBefore(temp, elem1);
        elem2.parentNode.insertBefore(elem1, elem2);
        temp.parentNode.insertBefore(elem2, temp);
        temp.parentNode.removeChild(temp);
    }
}

async function bubbleSort() {
    let array = document.querySelector(BARS_CONTAINER_DIV).children;

    sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < array.length - 1; i++) {
            elem1 = array[i];
            elem2 = array[i + 1];

            elem1.classList.add("green");
            elem2.classList.add("green");

            valElem1 = parseInt(elem1.innerText);
            valElem2 = parseInt(elem2.innerText);

            if (valElem1 > valElem2) {
                elem1.parentNode.insertBefore(elem2, elem1);

                sorted = false;
            }

            await sleep(300);

            elem1.classList.remove("green");
            elem2.classList.remove("green");
        }
    }
}

async function selectionSort() {
    let array = document.querySelector(BARS_CONTAINER_DIV).children;

    for (let i = 0; i < array.length; i++) {
        let argMin = i;

        for (let j = i; j < array.length; j++) {
            let elemJ = array[j];
            let argMinElem = array[argMin];

            elemJ.classList.add("green");
            argMinElem.classList.add("green");

            let valElemJ = parseInt(elemJ.innerText);
            let valArgMinElem = parseInt(argMinElem.innerText);
            
            if (valElemJ < valArgMinElem) {
                argMin = j;
            }

            await sleep(300);

            elemJ.classList.remove("green");
            argMinElem.classList.remove("green");
        }

        array[i].parentNode.insertBefore(array[argMin], array[i]);
    }
}

async function insertionSort() {
    let array = document.querySelector(BARS_CONTAINER_DIV).children;

    for (let i = 1; i < array.length; i++) {
        let j = i;

        while (j > 0) {
            let elem1 = array[j];
            let elem2 = array[j - 1];

            elem1.classList.add("green");
            elem2.classList.add("green");

            let valElem1 = parseInt(elem1.innerText);
            let valElem2 = parseInt(elem2.innerText);

            if (valElem1 < valElem2) {
                elem2.parentNode.insertBefore(elem1, elem2);
            } else {
                elem1.classList.remove("green");
                elem2.classList.remove("green");
                break;
            }

            await sleep(300);

            elem1.classList.remove("green");
            elem2.classList.remove("green");

            j--;
        }
        
    }
}

async function partition(left, right) {
    let array = document.querySelector(BARS_CONTAINER_DIV).children;

    for (let i = 0; i < left; i++) {
        array[i].style.opacity = "0.2";
    }

    for (let i = right + 1; i < array.length; i++) {
        array[i].style.opacity = "0.2";
    }

    let pivotElement = array[left];
    pivotElement.classList.add("blue");

    let pivotValue = parseInt(pivotElement.innerText);

    let i = left + 1;
    let j = right;

    while (i <= j) {
        array[i].classList.add("yellow");
        array[j].classList.add("green");

        while (i <= right) {
            let elem = array[i];
            let elemValue = parseInt(elem.innerText);
            elem.classList.add("yellow");

            await sleep(200);

            if (elemValue <= pivotValue) {
                elem.classList.remove("yellow");
                i++;
            } else {
                break;
            }
        }

        while (j >= left) {
            let elem = array[j];
            let elemValue = parseInt(elem.innerText);
            elem.classList.add("green");

            await sleep(200);

            if (elemValue > pivotValue) {
                elem.classList.remove("green");
                j--;
            } else {
                break;
            }
        }

        array[i].classList.remove("yellow");
        array[j].classList.remove("green");

        if (i < j) {
            let temp = document.createElement("div");
            let elemI = array[i];
            let elemJ = array[j];

            elemI.parentNode.insertBefore(temp, elemI);
            elemJ.parentNode.insertBefore(elemI, elemJ);
            temp.parentNode.insertBefore(elemJ, temp);
            temp.parentNode.removeChild(temp);
        }
    }

    let temp = document.createElement("div");
    let elemLeft = array[left];
    let elemJ = array[j];

    elemLeft.parentNode.insertBefore(temp, elemLeft);
    elemJ.parentNode.insertBefore(elemLeft, elemJ);
    temp.parentNode.insertBefore(elemJ, temp);
    temp.parentNode.removeChild(temp);

    for (let i = 0; i < left; i++) {
        array[i].style.opacity = "1.0";
    }

    for (let i = right + 1; i < array.length; i++) {
        array[i].style.opacity = "1.0";
    }

    pivotElement.classList.remove("blue");

    return j;
}

async function quickSort(start, end) {
    if (start >= end) {
        return;
    }

    let pivot = await partition(start, end);

    await quickSort(start, pivot - 1);
    await quickSort(pivot + 1, end);
}

async function startQuickSort() {
    let array = document.querySelector(BARS_CONTAINER_DIV).children;
    await quickSort(0, array.length - 1);
}

window.onload = function() {
    drawRectangles();
}