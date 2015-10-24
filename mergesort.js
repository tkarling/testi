var merge = function(array, p, q, r) {
    var lowHalf = [];
    var highHalf = [];

    var k = p;
    var i;
    var j;
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p;
    i = 0;
    j = 0;

    // Repeatedly compare the lowest untaken element in
    //  lowHalf with the lowest untaken element in highHalf
    //  and copy the lower of the two back into array
    while(i<lowHalf.length && j < highHalf.length) {
        array[k++] = lowHalf[i] < highHalf[j] ? lowHalf[i++] : highHalf[j++];

    }
    //console.log(lowHalf + " moi " + highHalf);
    //console.log(i + " moi " + j);
    while(i<lowHalf.length) {
        array[k++] = lowHalf[i++];
    }
    while(j<highHalf.length) {
        array[k++] = highHalf[j++];
    }


    // Once one of lowHalf and highHalf has been fully copied
    //  back into array, copy the remaining elements from the
    //  other temporary array back into the array

};


var mergeSort = function(array, p, r) {
    console.log(p + " " + r + " " + (r-p));
    if((r=== p)) {
        return;
    }
    var mid = Math.floor((p + r)/2);
    mergeSort(array, p, mid);
    mergeSort(array, mid + 1, r);
    merge(array, p, mid, r);
    //console.log(array);

};

var array = [14, 7, 3, 12, 9, 11, 6, 2, 5,17];
mergeSort(array, 0, array.length-1);
console.log("Array after sorting: " + array);

var array2 = [14, -7, 3, 12, 0, 11, 6, 2, 5];
mergeSort(array2, 0, array2.length-1);
console.log("Array after sorting: " + array2);