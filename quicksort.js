// Swaps two items in an array, changing the original array
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var partition = function(array, p, r) {
    // Compare array[j] with array[r], for j = p, p+1,...r-1
    // maintaining that:
    //  array[p..q-1] are values known to be <= to array[r]
    //  array[q..j-1] are values known to be > array[r]
    //  array[j..r-1] haven't been compared with array[r]
    // If array[j] > array[r], just increment j.
    // If array[j] <= array[r], swap array[j] with array[q],
    //   increment q, and increment j.
    // Once all elements in array[p..r-1]
    //  have been compared with array[r],
    //  swap array[r] with array[q], and return q.
    var q = p;
    for(var i = p; i< r; i++) {
        // println(array[i] + " " + array[r]);
        if(array[i] <= array[r]) {
             console.log("swap" + array[i] + " " + array[r]);
            // println(array);
            swap(array, i, q);
            q=q+1;
        }
    }
    swap(array, r, q);
    //console.log(q);
    //return q==0 ? 1: q;
    return q;

};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
var q = partition(array, 0, array.length-1);
console.log("Array after partitioning: " + array, q);

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
var q = partition(array, 0, array.length-1);
console.log("Array after partitioning: " + array, q);

var array = [9, 7];
var q = partition(array, 0, array.length-1);
console.log("Array after partitioning: " + array, q);




//var partition = function (array, p, r) {
//    // This code has been purposefully obfuscated,
//    // as you will implement it yourself in next challenge
//    var e = array, t = p, n = r;
//    var r = function (e, t, n) {
//        var r = e[t];
//        e[t] = e[n];
//        e[n] = r;
//    };
//    var i = t;
//    for (var s = t; s < n; s++) {
//        if (e[s] <= e[n]) {
//            r(e, s, i);
//            i++;
//        }
//    }
//    r(e, n, i);
//    return i;
//};


var quickSort = function(array, p, r) {
    if(p < r) {
        var mid = partition(array, p, r);
        //console.log(p, r, mid, array);
        quickSort(array, p, mid-1);
        quickSort(array, mid, r);
    }

};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
quickSort(array, 0, array.length-1);
console.log("Array after sorting: " + array);

var array1 = [1, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
quickSort(array1, 0, array1.length-1);
console.log("Array after sorting: " + array1);