function assertEqual(a, b) {
    return a === b;
}


var doBinarySearch = function(array, targetValue) {
    var min = 0;
    var max = array.length - 1;
    var guess = max;
    var count = 0;
    while(max >= min) {
        //console.log(guess);
        ++count;
        guess = Math.floor((max+min)/2);
        if(array[guess] === targetValue) {
            //console.log(count);
            return guess;
        } else if ( array[guess] < targetValue) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }
    return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doBinarySearch(primes, 97);
console.log("Found prime at index " + result);

assertEqual(doBinarySearch(primes, 73), 20);
assertEqual(doBinarySearch(primes, 2), 0);
assertEqual(doBinarySearch(primes, 97), 24);
assertEqual(doBinarySearch(primes, 12), -1);




// SELECTION SORT

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};

var selectionSort = function(array) {
    var minIndex;
    for(var i = 0; i < array.length; i++) {
        minIndex = indexOfMinimum(array, i);
        swap(array, i, minIndex);
    }

};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
console.log("Array after sorting:  " + array);

assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array2 = [7, 9, -11, 22, 12, 93, 88];
selectionSort(array2);
assertEqual(array2, [-11, 7, 9, 12, 22, 88, 93]);







// INSERTION SORT
var insert = function(array, rightIndex, value) {
    for(var j = rightIndex;
        j >= 0 && array[j] > value;
        j--) {
        array[j + 1] = array[j];
    }
    array[j + 1] = value;
};

var insertionSort = function(array) {
    for(var i = 1; i < array.length; i++) {
        insert(array, i-1, array[i]);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
console.log("Array after sorting:  " + array);
assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array = [22, -12, 99, 88, 0, 7, 42];
insertionSort(array);
console.log("Array after sorting:  " + array);
assertEqual(array, [-12, 0, 7, 22, 42, 88, 99]);