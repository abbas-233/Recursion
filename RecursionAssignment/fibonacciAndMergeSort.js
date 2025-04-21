// fibonacciAndMergeSort.js

const fs = require('fs');
const outputFileName = 'output.txt';
let outputContent = '';

// Iterative Fibonacci function
function fibs(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) result.push(0);
        else if (i === 1) result.push(1);
        else result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}

// Recursive Fibonacci function
function fibsRec(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const result = fibsRec(n - 1);
    result.push(result[result.length - 1] + result[result.length - 2]);
    return result;
}

// Merge Sort function
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

// Helper function to merge two sorted arrays
function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage
outputContent += 'fibs(8): ' + JSON.stringify(fibs(8)) + '\n';
outputContent += 'fibsRec(8): ' + JSON.stringify(fibsRec(8)) + '\n';
outputContent += 'mergeSort([3, 2, 1, 13, 8, 5, 0, 1]): ' + JSON.stringify(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])) + '\n';

fs.writeFileSync(outputFileName, outputContent);
console.log(`Output saved to ${outputFileName}`); 