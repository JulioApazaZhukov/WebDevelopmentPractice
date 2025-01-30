var array = [118, 3, 67, 128, 117, 146, 19, 40, 45, 37, 140, 21, 62, 13, 124, 47, 30, 7, 17, 88, 13, 33, 8, 19, 63, 35, 52, 144, 54, 31, 37, 111, 1, 113, 110, 2, 23, 56, 89, 73, 142, 25, 121, 46, 96, 16, 3, 150, 104, 18];
var barElements = [];
var invisibleContainer = document.getElementById('invisible-container');
var elements = invisibleContainer.getElementsByClassName('element');
for (var i = 0; i < elements.length; i++) {
    barElements.push(elements[i]);
}
async function bubblesort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let n = array[j];
                array[j] = array[j+1];
                array[j+1] = n;
                await updateBars(array);
            }
        }
    }
}
async function updateBars(array) {
    for (let i = 0; i < array.length; i++) {
        barElements[i].style.height = array[i] * 5 + "px";
    }
    await new Promise(resolve => setTimeout(resolve, 20));
}
bubblesort(array).then(() => {
    console.log("Script module is Ok");
});