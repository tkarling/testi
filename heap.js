function swap(arr, first, second) {
    //console.log("swap", first, second, arr[first], arr[second]);
    var tmp = arr[second];
    arr[second] = arr[first];
    arr[first] = tmp;
}


function heapify(arr, start, end) {
    var largest = start;
    var left = 2*start+1;
    var right = 2*start+2;

        if(left <= end && arr[largest] < arr[left]) {
            //console.log("set left");
          largest = left;
        }
        if(right <= end && arr[largest] < arr[right]) {
            //console.log("set right");
            largest = right;
        }
        if(largest !==  start) {
            swap(arr, largest, start);
            heapify(arr, largest, end);
        }

}

function buildHeap(arr) {
    for(var i= Math.floor((arr.length-1)/2); i >=0; i--) {
        //console.log("heapify", i, end);
        heapify(arr, i, arr.length-1);
    }
}



function heapSort(arr, start, end) {
    buildHeap(arr);

    //console.log("heap", arr);
    var size = arr.length -1;
    for(var i = size; i >=0; i--) {
        swap(arr, start, i);
        //--size;
        heapify(arr, start, i-1);
    }
}



var array = [14, 7, 3, 12, 9, 11, 6, 2, 5,17, 4];

heapSort(array, 0, array.length-1);
console.log("Array after sorting: " + array);

//var array2 = [14, -7, 3, 12, 0, 11, 6, 2, 5];
//heapSort(array2, 0, array2.length-1);
//console.log("Array after sorting: " + array2);