myArray = [1, 15, 2, 12, 13, 6, 4, 7, 20, 18];

function buildMaxHeap(array) {
  let lastParentIndex = Math.floor(array.length/2) - 1;
  
  for (let i = lastParentIndex; i >= 0; i--) {
    let parent = array[i];
    let leftIndex = 2 * i + 1;
    let rightIndex = 2 * i + 2;
      
    if (parent < array[leftIndex] && array[leftIndex] > array[rightIndex]) {
      [array[i], array[leftIndex]] = [array[leftIndex], array[i]];
      
    } else if (parent < array[leftIndex] && !array[rightIndex]) {
      [array[i], array[leftIndex]] = [array[leftIndex], array[i]];
      
    } else if (parent < array[rightIndex]){
      [array[i], array[rightIndex]] = [array[rightIndex], array[i]];
    }      
  }
  
  return array;
}

function heapSort(array) {
  let length = array.length
  let sorted = [];

  buildMaxHeap(array);
  
  while (length) {
    let largestNumber = array.shift();
    
    sorted.unshift(largestNumber);
    length--;
    
    buildMaxHeap(array);
  }
  
  return sorted;
}

let sortedArray = heapSort(myArray);

console.log(sortedArray);

 module.exports = heapSort;
